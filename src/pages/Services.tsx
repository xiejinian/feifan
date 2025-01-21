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
      </Box>
    </Container>
  );
};

export default Services;
