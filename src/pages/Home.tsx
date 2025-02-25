import React, { useCallback } from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import BusinessIcon from '@mui/icons-material/Business';
import SupportIcon from '@mui/icons-material/Support';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

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

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Box sx={{ position: 'relative' }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#1a237e",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: ["#ffffff", "#4fc3f7", "#8be9fd"],
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1
        }}
      />
      
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        {/* Hero Section */}
        <Box
          sx={{
            color: 'white',
            py: { xs: 10, md: 15 },
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              component="h1"
              textAlign="center"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.75rem' },
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                mb: 3
              }}
            >
              {t('home.mainSlogan')}
            </Typography>
            <Typography
              textAlign="center"
              variant="h5"
              sx={{
                mb: 4,
                opacity: 0.9,
                maxWidth: '800px',
                mx: 'auto'
              }}
            >
              {t('home.subSlogan')}
            </Typography>
            <Box sx={{ 
              textAlign: 'center',
              mt: 4
            }}>
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
            </Box>
          </motion.div>
        </Box>

        {/* Features Section */}
        <Container sx={{ 
          py: { xs: 8, md: 12 },
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: 2,
          boxShadow: '0 4px 30px rgba(0,0,0,0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}>
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            gutterBottom
            sx={{
              mb: 6,
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '2.75rem' },
              color: 'white'
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
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(8px)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                      position: 'relative',
                      overflow: 'hidden',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
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
                        transition: 'all 0.3s',
                        boxShadow: '0 6px 30px rgba(0,0,0,0.2)'
                      },
                    }}
                  >
                    <Box
                      sx={{
                        mb: 2,
                        color: '#8be9fd',
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
                        fontWeight: 600,
                        color: 'white'
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      sx={{
                        lineHeight: 1.7,
                        fontSize: '1.1rem',
                        color: 'rgba(255, 255, 255, 0.9)'
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
    </Box>
  );
};

export default Home;
