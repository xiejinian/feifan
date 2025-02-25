import React, { useCallback } from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

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

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      <Particles
        id="tsparticles-about"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#1a237e",
            },
          },
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: ["#4fc3f7", "#8be9fd"],
            },
            shape: {
              type: ["circle", "triangle", "polygon"], // 多种形状
            },
            opacity: {
              value: 0.6,
              random: true,
            },
            size: {
              value: { min: 1, max: 3 },
              random: true,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              random: true,
              straight: false,
              outModes: "out",
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200,
              },
            },
            links: {
              enable: true,
              distance: 150,
              color: "#4fc3f7",
              opacity: 0.3,
              width: 1,
            },
            rotate: {
              value: 0,
              random: true,
              direction: "clockwise",
              animation: {
                enable: true,
                speed: 5,
                sync: false,
              },
            },
          },
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1
        }}
      />

      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ py: 8 }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom 
              textAlign="center" 
              sx={{ 
                fontWeight: 700,
                color: '#8be9fd',
                mb: 2,
                fontSize: { xs: '2.5rem', md: '3.75rem' }
              }}
            >
              {t('about.title')}
            </Typography>
            <Typography 
              variant="h5" 
              textAlign="center" 
              sx={{ 
                mb: 6, 
                maxWidth: '800px', 
                mx: 'auto',
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: { xs: '1.2rem', md: '1.5rem' }
              }}
            >
              {t('about.description')}
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
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                    position: 'relative',
                    overflow: 'hidden',
                    textAlign: 'center',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '4px',
                      background: 'linear-gradient(90deg, #4fc3f7, #8be9fd)'
                    },
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      transition: 'transform 0.3s ease-in-out',
                      boxShadow: '0 6px 30px rgba(0,0,0,0.2)'
                    },
                  }}
                >
                  <Typography variant="h4" gutterBottom sx={{ color: '#8be9fd', fontWeight: 600 }}>
                    {t('about.mission.title')}
                  </Typography>
                  <Typography paragraph sx={{ 
                    color: 'rgba(255, 255, 255, 0.9)', 
                    lineHeight: 1.7,
                    maxWidth: '600px',
                    mx: 'auto'
                  }}>
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
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                    position: 'relative',
                    overflow: 'hidden',
                    textAlign: 'center',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '4px',
                      background: 'linear-gradient(90deg, #4fc3f7, #8be9fd)'
                    },
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      transition: 'transform 0.3s ease-in-out',
                      boxShadow: '0 6px 30px rgba(0,0,0,0.2)'
                    },
                  }}
                >
                  <Typography variant="h4" gutterBottom sx={{ color: '#8be9fd', fontWeight: 600 }}>
                    {t('about.values.title')}
                  </Typography>
                  <Box sx={{ m: 0 }}>
                    {values.map((value, index) => (
                      <Typography
                        key={index}
                        sx={{
                          mb: 1.5,
                          lineHeight: 1.7,
                          color: 'rgba(255, 255, 255, 0.9)',
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
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 2,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '4px',
                    background: 'linear-gradient(90deg, #4fc3f7, #8be9fd)'
                  },
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    transition: 'transform 0.3s ease-in-out',
                    boxShadow: '0 6px 30px rgba(0,0,0,0.2)'
                  },
                }}
              >
                <Typography variant="h4" gutterBottom sx={{ color: '#8be9fd', fontWeight: 600, textAlign: 'center' }}>
                  {t('about.whyChooseUs.title')}
                </Typography>
                <Typography
                  sx={{
                    maxWidth: 800,
                    mx: 'auto',
                    lineHeight: 1.7,
                    fontSize: '1.1rem',
                    color: 'rgba(255, 255, 255, 0.9)',
                    textAlign: 'center'
                  }}
                >
                  {t('about.whyChooseUs.description')}
                </Typography>
              </Paper>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
