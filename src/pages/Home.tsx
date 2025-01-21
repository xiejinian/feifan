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
          background: 'linear-gradient(45deg, #1a237e 30%, #283593 90%)',
          color: 'white',
          py: { xs: 10, md: 15 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("/assets/tech-pattern.png")',
            opacity: 0.1,
            zIndex: 0,
          }
        }}
      >
        <Container sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.75rem' },
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                mb: 3
              }}
            >
              {t('home.hero.title')}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                opacity: 0.9,
                maxWidth: '800px',
                mx: 'auto'
              }}
            >
              {t('home.hero.subtitle')}
            </Typography>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              color="secondary"
              size="large"
              sx={{
                py: 1.5,
                px: 4,
                fontSize: '1.1rem',
                fontWeight: 600,
                textTransform: 'none',
                boxShadow: '0 4px 14px 0 rgba(0,0,0,0.25)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.3)'
                }
              }}
            >
              {t('home.hero.cta')}
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: { xs: 8, md: 12 } }}>
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{
            mb: 6,
            fontWeight: 700,
            fontSize: { xs: '2rem', md: '2.75rem' }
          }}
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
                style={{ height: '100%' }}
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 4,
                    height: '100%',
                    borderRadius: 2,
                    backgroundColor: 'background.paper',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '4px',
                      background: 'linear-gradient(90deg, #1a237e, #283593)'
                    },
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      transition: 'all 0.3s',
                      boxShadow: '0 6px 30px rgba(0,0,0,0.12)'
                    },
                  }}
                >
                  <Box
                    sx={{
                      mb: 2,
                      color: 'primary.main',
                      transform: 'scale(1.2)'
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      mt: 2,
                      mb: 2,
                      fontWeight: 600
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.7,
                      fontSize: '1.1rem'
                    }}
                  >
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
