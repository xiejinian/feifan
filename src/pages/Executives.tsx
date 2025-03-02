import React from 'react';
import { Container, Typography, Grid, Box, Avatar, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import AppleBackground from '../components/AppleBackground';

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
  {
    name: 'Yugang Wang',
    position: 'executives.positions.csd',
    bio: 'executives.bios.csd',
    imageUrl: '/images/executives/yugang-wang.jpg'
  },
];

const ExecutivesPage = () => {
  const { t } = useTranslation();

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

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', bgcolor: '#1a237e' }}>
      <AppleBackground variant="tertiary" />
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
                fontSize: { xs: '2.5rem', md: '3.75rem' },
                textShadow: '0 2px 10px rgba(139, 233, 253, 0.3)'
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
          </motion.div>

          <Grid container spacing={4}>
            {executives.map((executive, index) => (
              <Grid item xs={12} sm={6} md={4} key={executive.name}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      borderRadius: 3,
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      boxShadow: '0 10px 30px -10px rgba(0,0,0,0.3)',
                      textAlign: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translateY(-12px)',
                        backgroundColor: 'rgba(255, 255, 255, 0.12)',
                        boxShadow: '0 20px 40px -20px rgba(0,0,0,0.4)',
                        '& .executive-avatar': {
                          transform: 'scale(1.05)',
                          borderColor: '#8be9fd',
                          boxShadow: '0 8px 32px rgba(139, 233, 253, 0.3)'
                        }
                      }
                    }}
                  >
                    <Avatar
                      src={executive.imageUrl}
                      alt={executive.name}
                      className="executive-avatar"
                      sx={{
                        width: 160,
                        height: 160,
                        mx: 'auto',
                        mb: 3,
                        border: '4px solid rgba(255, 255, 255, 0.2)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
                      }}
                    />
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{
                        color: '#8be9fd',
                        fontWeight: 600,
                        mb: 1,
                        textShadow: '0 2px 8px rgba(139, 233, 253, 0.2)'
                      }}
                    >
                      {executive.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      sx={{
                        color: '#4fc3f7',
                        mb: 2,
                        fontWeight: 500,
                        letterSpacing: 0.5
                      }}
                    >
                      {t(executive.position)}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        lineHeight: 1.8,
                        fontSize: '0.875rem',
                        px: 1,
                        height: '120px',
                        overflow: 'auto',
                        '&::-webkit-scrollbar': {
                          width: '4px'
                        },
                        '&::-webkit-scrollbar-track': {
                          background: 'rgba(255, 255, 255, 0.1)'
                        },
                        '&::-webkit-scrollbar-thumb': {
                          background: 'rgba(79, 195, 247, 0.5)',
                          borderRadius: '4px'
                        },
                        '&::-webkit-scrollbar-thumb:hover': {
                          background: 'rgba(139, 233, 253, 0.7)'
                        }
                      }}
                    >
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