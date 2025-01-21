import React from 'react';
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
} from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import BusinessIcon from '@mui/icons-material/Business';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { useTranslation } from 'react-i18next';

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

  const successCases = [
    {
      title: t('services.successCases.cases.case1.title'),
      client: t('services.successCases.cases.case1.client'),
      challenge: t('services.successCases.cases.case1.challenge'),
      solution: t('services.successCases.cases.case1.solution'),
      results: t('services.successCases.cases.case1.results', { returnObjects: true }) as string[],
      technologies: t('services.successCases.cases.case1.technologies', { returnObjects: true }) as string[]
    },
    {
      title: t('services.successCases.cases.case2.title'),
      client: t('services.successCases.cases.case2.client'),
      challenge: t('services.successCases.cases.case2.challenge'),
      solution: t('services.successCases.cases.case2.solution'),
      results: t('services.successCases.cases.case2.results', { returnObjects: true }) as string[],
      technologies: t('services.successCases.cases.case2.technologies', { returnObjects: true }) as string[]
    },
    {
      title: t('services.successCases.cases.case3.title'),
      client: t('services.successCases.cases.case3.client'),
      challenge: t('services.successCases.cases.case3.challenge'),
      solution: t('services.successCases.cases.case3.solution'),
      results: t('services.successCases.cases.case3.results', { returnObjects: true }) as string[],
      technologies: t('services.successCases.cases.case3.technologies', { returnObjects: true }) as string[]
    },
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
          <Typography variant="h2" component="h1" gutterBottom textAlign="center" sx={{ fontWeight: 700 }}>
            {t('services.title')}
          </Typography>
          <Typography
            variant="h5"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 8, maxWidth: '800px', mx: 'auto' }}
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
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
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
                  <CardHeader
                    title={service.title}
                    titleTypographyProps={{
                      align: 'center',
                      variant: 'h5',
                      fontWeight: 600,
                      color: 'primary.main'
                    }}
                    sx={{ pb: 0 }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      align="center"
                      gutterBottom
                      sx={{ mb: 3, lineHeight: 1.7 }}
                    >
                      {service.description}
                    </Typography>
                    <List>
                      {service.features.map((feature) => (
                        <ListItem key={feature} sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <CheckCircleOutlineIcon color="primary" sx={{ fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={feature}
                            primaryTypographyProps={{
                              variant: 'body2',
                              fontWeight: 500
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 12 }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h2" component="h2" gutterBottom textAlign="center" sx={{ fontWeight: 700 }}>
              {t('services.successCases.title')}
            </Typography>
            <Typography
              variant="h5"
              textAlign="center"
              color="text.secondary"
              sx={{ mb: 8, maxWidth: '800px', mx: 'auto' }}
            >
              {t('services.successCases.subtitle')}
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
                  <Card
                    sx={{
                      background: 'linear-gradient(135deg, rgba(21,101,192,0.05) 0%, rgba(63,81,181,0.05) 100%)',
                      borderRadius: 3,
                      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                      overflow: 'hidden',
                      position: 'relative',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        transition: 'transform 0.3s ease-in-out',
                        boxShadow: '0 12px 48px rgba(0,0,0,0.15)'
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={8}>
                          <Typography variant="h4" component="h3" gutterBottom color="primary.main" sx={{ fontWeight: 600 }}>
                            {caseStudy.title}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <BusinessIcon sx={{ mr: 1, color: 'text.secondary' }} />
                            <Typography variant="subtitle1" color="text.secondary">
                              {caseStudy.client}
                            </Typography>
                          </Box>

                          <Box sx={{ mb: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                              <ErrorOutlineIcon sx={{ mr: 1, mt: 0.5, color: 'warning.main' }} />
                              <Typography variant="body1">
                                <strong>{t('Challenge')}:</strong> {caseStudy.challenge}
                              </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                              <LightbulbOutlinedIcon sx={{ mr: 1, mt: 0.5, color: 'success.main' }} />
                              <Typography variant="body1">
                                <strong>{t('Solution')}:</strong> {caseStudy.solution}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>

                        <Grid item xs={12} md={4}>
                          <Box sx={{ mb: 3 }}>
                            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                              <DoneAllIcon sx={{ mr: 1, color: 'success.main' }} />
                              {t('Key Results')}
                            </Typography>
                            <List dense>
                              {caseStudy.results.map((result: string) => (
                                <ListItem key={result} sx={{ py: 0.5 }}>
                                  <ListItemIcon sx={{ minWidth: 36 }}>
                                    <CheckCircleOutlineIcon color="primary" sx={{ fontSize: 20 }} />
                                  </ListItemIcon>
                                  <ListItemText primary={result} />
                                </ListItem>
                              ))}
                            </List>
                          </Box>

                          <Divider sx={{ mb: 2 }} />

                          <Box>
                            <Typography variant="subtitle2" gutterBottom color="text.secondary">
                              {t('Technologies Used')}:
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                              {caseStudy.technologies.map((tech: string) => (
                                <Chip
                                  key={tech}
                                  label={tech}
                                  size="small"
                                  sx={{
                                    background: 'linear-gradient(135deg, #1a237e 0%, #283593 100%)',
                                    color: 'white',
                                    '&:hover': { opacity: 0.9 }
                                  }}
                                />
                              ))}
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Services;
