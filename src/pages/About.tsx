import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const values = [
    t('about.values.innovation') + '  ' + t('about.values.excellence'),
    t('about.values.integrity') + "  " + t('about.values.collaboration')
  ];

  return (
    <Container>
      <Box sx={{ py: 8 }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <Typography   variant="h2" component="h1" gutterBottom textAlign="center" sx={{ fontWeight: 700 }}>
            {t('about.title')}
          </Typography>
          <Typography   variant="h5" textAlign="center" color="text.secondary" sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}>
            {t('about.subtitle')}
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ height: '100%' }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: 2,
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
                    transition: 'transform 0.3s ease-in-out',
                    boxShadow: '0 6px 30px rgba(0,0,0,0.12)'
                  },
                }}
              >
                <Typography    textAlign="center" variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
                  {t('about.mission.title')}
                </Typography>
                <Typography    textAlign="center" paragraph sx={{ lineHeight: 1.7, fontSize: '1.1rem' }}>
                  {t('about.mission.description')}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ height: '100%' }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: 2,
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
                    transition: 'transform 0.3s ease-in-out',
                    boxShadow: '0 6px 30px rgba(0,0,0,0.12)'
                  },
                }}
              >
                <Typography   textAlign="center" variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
                  {t('about.values.title')}
                </Typography>
                <Box sx={{ m: 0, pl: 3 }}>
                  {values.map((value, index) => (
                    <Typography
                      textAlign="center"
                      component="li"
                      key={index}
                      sx={{
                        mb: 1.5,
                        lineHeight: 1.7,
                        fontSize: '1.1rem'
                      }}
                    >
                      {value}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Box sx={{ mt: 8 }}>
            <Typography variant="h4" gutterBottom textAlign="center" sx={{ color: 'primary.main', fontWeight: 600 }}>
              {t('about.whyChooseUs.title')}
            </Typography>
            <Typography
              paragraph
              textAlign="center"
              sx={{
                maxWidth: 800,
                mx: 'auto',
                lineHeight: 1.7,
                fontSize: '1.1rem'
              }}
            >
              {t('about.whyChooseUs.description')}
            </Typography>
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default About;
