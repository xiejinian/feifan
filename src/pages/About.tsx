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
          <Typography variant="h2" component="h1" gutterBottom textAlign="center">
            {t('about.title')}
          </Typography>
          <Typography variant="h5" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
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
              <Paper elevation={0} sx={{ p: 4, height: '100%' }}>
                <Typography variant="h4" gutterBottom>
                  {t('about.mission.title')}
                </Typography>
                <Typography paragraph>
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
              <Paper elevation={0} sx={{ p: 4, height: '100%' }}>
                <Typography variant="h4" gutterBottom>
                  {t('about.values.title')}
                </Typography>
                <Box component="ul" sx={{ m: 0, pl: 3 }}>
                  {values.map((value, index) => (
                    <Typography component="li" key={index}>
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
          <Box sx={{ mt: 6 }}>
            <Typography variant="h4" gutterBottom textAlign="center">
              {t('about.whyChooseUs.title')}
            </Typography>
            <Typography paragraph textAlign="center" sx={{ maxWidth: 800, mx: 'auto' }}>
              {t('about.whyChooseUs.description')}
            </Typography>
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default About;
