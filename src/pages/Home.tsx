import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import BusinessIcon from '@mui/icons-material/Business';
import SupportIcon from '@mui/icons-material/Support';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  
  const fadeIn = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: 'easeInOut' },
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const features = [
    {
      title: t('home.features.innovation.title'),
      description: t('home.features.innovation.description'),
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
    },
    {
      title: t('home.features.quality.title'),
      description: t('home.features.quality.description'),
      icon: <BusinessIcon sx={{ fontSize: 40 }} />,
    },
    {
      title: t('home.features.support.title'),
      description: t('home.features.support.description'),
      icon: <SupportIcon sx={{ fontSize: 40 }} />,
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          py: 12,
          textAlign: 'center',
        }}
      >
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h2" component="h1" gutterBottom>
              {t('home.hero.title')}
            </Typography>
            <Typography variant="h5" sx={{ mb: 4 }}>
              {t('home.hero.subtitle')}
            </Typography>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              color="secondary"
              size="large"
            >
              {t('home.hero.cta')}
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{ mb: 6 }}
        >
          {t('home.features.title')}
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={feature.title}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    height: '100%',
                    borderRadius: 2,
                    backgroundColor: 'background.paper',
                    '&:hover': {
                      boxShadow: 3,
                      transform: 'translateY(-5px)',
                      transition: 'all 0.3s',
                    },
                  }}
                >
                  {feature.icon}
                  <Typography variant="h5" component="h3" sx={{ mt: 2, mb: 1 }}>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
