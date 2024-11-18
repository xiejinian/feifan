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
} from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useTranslation } from 'react-i18next';

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
            {t('services.title')}
          </Typography>
          <Typography
            variant="h5"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 6 }}
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
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      transition: 'transform 0.3s ease-in-out',
                    },
                  }}
                >
                  <CardHeader
                    title={service.title}
                    titleTypographyProps={{ align: 'center', variant: 'h5' }}
                    sx={{ pb: 0 }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      align="center"
                      gutterBottom
                      sx={{ mb: 2 }}
                    >
                      {service.description}
                    </Typography>
                    <List>
                      {service.features.map((feature) => (
                        <ListItem key={feature} sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <CheckCircleOutlineIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Services;
