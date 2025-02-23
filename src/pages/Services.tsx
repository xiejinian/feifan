import React, { useCallback } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Divider,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import BusinessIcon from '@mui/icons-material/Business';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { useTranslation } from 'react-i18next';
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";


interface SuccessCase {
  title: string;
  client: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
}

const Services = () => {
  const { t } = useTranslation();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const services = [
    {
      title: t('services.solutions.development.title'),
      description: t('services.solutions.development.description'),
      features: [
        'Web Applications',
        'Mobile Apps',
        'Enterprise Software',
        'API Integration',
        'Cloud Solutions',
      ],
    },
    {
      title: t('services.solutions.consulting.title'),
      description: t('services.solutions.consulting.description'),
      features: [
        'Technology Assessment',
        'Architecture Design',
        'Digital Strategy',
        'Security Analysis',
        'Performance Optimization',
      ],
    },
    {
      title: t('services.solutions.cloud.title'),
      description: t('services.solutions.cloud.description'),
      features: [
        'Cloud Migration',
        'Cloud Infrastructure',
        'Scalability Solutions',
        'Cloud Security',
        'Performance Optimization',
      ],
    },
  ];

  const successCases: SuccessCase[] = [
    {
      title: t('services.successCases.cases.case1.title'),
      client: t('services.successCases.cases.case1.client'),
      challenge: t('services.successCases.cases.case1.challenge'),
      solution: t('services.successCases.cases.case1.solution'),
      results: (t('services.successCases.cases.case1.results', { returnObjects: true }) as string[]),
      technologies: (t('services.successCases.cases.case1.technologies', { returnObjects: true }) as string[])
    },
    {
      title: t('services.successCases.cases.case2.title'),
      client: t('services.successCases.cases.case2.client'),
      challenge: t('services.successCases.cases.case2.challenge'),
      solution: t('services.successCases.cases.case2.solution'),
      results: (t('services.successCases.cases.case2.results', { returnObjects: true }) as string[]),
      technologies: (t('services.successCases.cases.case2.technologies', { returnObjects: true }) as string[])
    },
    {
      title: t('services.successCases.cases.case3.title'),
      client: t('services.successCases.cases.case3.client'),
      challenge: t('services.successCases.cases.case3.challenge'),
      solution: t('services.successCases.cases.case3.solution'),
      results: (t('services.successCases.cases.case3.results', { returnObjects: true }) as string[]),
      technologies: (t('services.successCases.cases.case3.technologies', { returnObjects: true }) as string[])
    },
  ];

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      <Particles
        id="tsparticles-services"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#1a237e",
            },
          },
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: ["#ffffff", "#4fc3f7", "#8be9fd"],
            },
            shape: {
              type: ["circle", "square"],
            },
            size: {
              value: { min: 2, max: 4 },
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "right",
              straight: true,
              outModes: {
                default: "out",
                top: "bounce",
                bottom: "bounce",
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
              value: 45,
              random: true,
              direction: "clockwise",
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
                minimumValue: 0.3,
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
              {t('services.title')}
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
              {t('services.subtitle')}
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={4} key={service.title}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      height: '100%',
                      p: 3,
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
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        sx={{
                          color: '#8be9fd',
                          fontWeight: 600,
                          textAlign: 'center'
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.9)',
                          mb: 2,
                          textAlign: 'center'
                        }}
                      >
                        {service.description}
                      </Typography>
                      <List dense>
                        {service.features.map((feature) => (
                          <ListItem key={feature} sx={{ py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 36, color: '#4fc3f7' }}>
                              <CheckCircleOutlineIcon />
                            </ListItemIcon>
                            <ListItemText
                              primary={feature}
                              primaryTypographyProps={{
                                sx: { color: 'rgba(255, 255, 255, 0.9)' }
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 10 }}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                textAlign="center"
                sx={{
                  color: '#8be9fd',
                  fontWeight: 700,
                  mb: 6
                }}
              >
                {t('services.successCases.title')}
              </Typography>
            </motion.div>

            <Grid container spacing={4}>
              {successCases.map((caseStudy, index) => (
                <Grid item xs={12} key={caseStudy.title}>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
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
                        }
                      }}
                    >
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={8}>
                          <Typography
                            variant="h4"
                            component="h3"
                            gutterBottom
                            sx={{
                              color: '#8be9fd',
                              fontWeight: 600,
                              mb: 2
                            }}
                          >
                            {caseStudy.title}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <BusinessIcon sx={{ mr: 1, color: 'rgba(255, 255, 255, 0.7)' }} />
                            <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                              {caseStudy.client}
                            </Typography>
                          </Box>
                          <Box sx={{ mb: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                              <ErrorOutlineIcon sx={{ mr: 1, mt: 0.5, color: '#ffa726' }} />
                              <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                                <Box component="span" sx={{ fontWeight: 600, color: '#8be9fd' }}>
                                  {t('Challenge')}:
                                </Box> {caseStudy.challenge}
                              </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                              <LightbulbOutlinedIcon sx={{ mr: 1, mt: 0.5, color: '#66bb6a' }} />
                              <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                                <Box component="span" sx={{ fontWeight: 600, color: '#8be9fd' }}>
                                  {t('Solution')}:
                                </Box> {caseStudy.solution}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>

                        <Grid item xs={12} md={4}>
                          <Box sx={{ mb: 3 }}>
                            <Typography
                              variant="h6"
                              gutterBottom
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                color: '#8be9fd',
                                mb: 2
                              }}
                            >
                              <DoneAllIcon sx={{ mr: 1, color: '#66bb6a' }} />
                              {t('Key Results')}
                            </Typography>
                            <List dense>
                              {caseStudy.results.map((result) => (
                                <ListItem key={result} sx={{ py: 0.5 }}>
                                  <ListItemIcon sx={{ minWidth: 36, color: '#4fc3f7' }}>
                                    <CheckCircleOutlineIcon />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={result}
                                    primaryTypographyProps={{
                                      sx: { color: 'rgba(255, 255, 255, 0.9)' }
                                    }}
                                  />
                                </ListItem>
                              ))}
                            </List>
                          </Box>

                          <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)', mb: 2 }} />

                          <Box>
                            <Typography
                              variant="subtitle1"
                              gutterBottom
                              sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 1.5 }}
                            >
                              {t('Technologies Used')}:
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                              {caseStudy.technologies.map((tech) => (
                                <Chip
                                  key={tech}
                                  label={tech}
                                  size="small"
                                  sx={{
                                    background: 'rgba(79, 195, 247, 0.15)',
                                    color: '#8be9fd',
                                    border: '1px solid rgba(139, 233, 253, 0.3)',
                                    '&:hover': {
                                      background: 'rgba(79, 195, 247, 0.25)'
                                    }
                                  }}
                                />
                              ))}
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
