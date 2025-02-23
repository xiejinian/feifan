import React, { useCallback } from 'react';
import { Container, Typography, Grid, Box, Avatar, Paper } from '@mui/material';
// import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { motion } from 'framer-motion';

interface Executive {
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
}

const executives: Executive[] = [
  {
    name: "Yufeng Li",
    position: "executives.positions.ceo",
    bio: "executives.bios.ceo",
    imageUrl: "/assets/executives/ceo.jpg"
  },
  {
    name: "Jinian Xie",
    position: "executives.positions.cto",
    bio: "executives.bios.cto",
    imageUrl: "/assets/executives/cto.jpg"
  },
  {
    name: "Deliang Wen",
    position: "executives.positions.cai_scientist",
    bio: "executives.bios.cai_scientist",
    imageUrl: "/assets/executives/cai_scientist.jpg"
  },
  {
    name: "Jixiang Qin",
    position: "executives.positions.cps_scientist",
    bio: "executives.bios.cps_scientist",
    imageUrl: "/assets/executives/cps_scientist.png"
  },
  {
    name: "Han Kong",
    position: "executives.positions.chs_scientist",
    bio: "executives.bios.chs_scientist",
    imageUrl: "/assets/executives/chs_scientist.jpg"
  },
  // Add more executives as needed
];

// const StyledCard = styled(Card)(({ theme }) => ({
//   height: '100%',
//   display: 'flex',
//   flexDirection: 'column',
//   transition: 'transform 0.2s',
//   '&:hover': {
//     transform: 'scale(1.02)',
//   },
// }));

const ExecutivesPage = () => {
  const { t } = useTranslation();
  
  // 在组件内定义动画
  const fadeIn = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      <Particles
        id="tsparticles-executives"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#1a237e",
            },
          },
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: ["#ffffff", "#4fc3f7", "#8be9fd"],
            },
            shape: {
              type: "polygon",
              polygon: {
                sides: 6,
              },
            },
            size: {
              value: { min: 3, max: 8 },
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              outModes: {
                default: "bounce",
              },
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200,
              },
            },
            links: {
              enable: true,
              distance: 200,
              color: "#4fc3f7",
              opacity: 0.3,
              width: 1,
            },
            rotate: {
              value: {
                min: 0,
                max: 360,
              },
              direction: "random",
              animation: {
                enable: true,
                speed: 5,
                sync: false,
              },
            },
            opacity: {
              value: 0.7,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.4,
                sync: false,
              },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "grab",
                },
              },
              modes: {
                grab: {
                  distance: 200,
                  links: {
                    opacity: 0.5,
                  },
                },
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
            {t('executives.title')}
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
            {t('executives.subtitle')}
          </Typography>

          <Grid container spacing={4}>
            {executives.map((executive) => (
              <Grid item xs={12} sm={6} md={4} key={executive.name}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  transition={{ duration: 0.6 }}
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
                      textAlign: 'center',
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
                    <Avatar
                      src={executive.imageUrl}
                      alt={executive.name}
                      sx={{
                        width: 120,
                        height: 120,
                        mx: 'auto',
                        mb: 2,
                        border: '3px solid #4fc3f7'
                      }}
                    />
                    <Typography variant="h5" gutterBottom sx={{ color: '#8be9fd', fontWeight: 600 }}>
                      {executive.name}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom sx={{ color: '#4fc3f7' }}>
                      {t(executive.position)}
                    </Typography>
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      {t(executive.bio)}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ExecutivesPage;