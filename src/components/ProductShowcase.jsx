import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Tabs, 
  Tab, 
  Grid, 
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
  Stack
} from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// 产品图片映射
const productImages = {
  ecommerce: {
    NexShop: '/images/products/nexshop.webp',     // 电商平台界面
    PayFlow: '/images/products/payflow.webp'       // 支付系统界面
  },
  aiPlatform: {
    InsightCore: '/images/products/insightcore.webp', // AI分析平台界面
    NeuralOps: '/images/products/neuralops.webp'      // AI运维平台界面
  },
  enterprise: {
    WorkSphere: '/images/products/worksphere.webp',   // 企业协作平台界面
    SecureVault: '/images/products/securevault.webp'  // 安全系统界面
  },
  hardware: {
    SmartHub: '/images/products/smarthub.webp',       // 智能中枢设备
    QuantumSense: '/images/products/quantumsense.webp' // 传感器设备
  }
};

const ProductShowcase = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('ecommerce');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const categories = [
    { value: 'ecommerce', label: t('services.products.categories.ecommerce.title') },
    { value: 'aiPlatform', label: t('services.products.categories.aiPlatform.title') },
    { value: 'enterprise', label: t('services.products.categories.enterprise.title') },
    { value: 'hardware', label: t('services.products.categories.hardware.title') },
  ];

  const currentProducts = t(`services.products.categories.${activeTab}.items`, { returnObjects: true }) || [];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h2" 
            component="h2" 
            sx={{ 
              color: '#64B5F6',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('services.products.title')}
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.7)',
              mb: 4
            }}
          >
            {t('services.products.subtitle')}
          </Typography>

          <Tabs 
            value={activeTab} 
            onChange={handleTabChange} 
            variant={isMobile ? "scrollable" : "standard"}
            scrollButtons={isMobile ? "auto" : false}
            centered={!isMobile}
            sx={{ 
              mb: 4,
              '& .MuiTabs-indicator': {
                backgroundColor: '#64B5F6'
              },
              '& .MuiTab-root': {
                color: 'rgba(255, 255, 255, 0.7)',
                '&.Mui-selected': {
                  color: '#64B5F6'
                }
              }
            }}
          >
            {categories.map((category) => (
              <Tab 
                key={category.value}
                value={category.value}
                label={category.label}
              />
            ))}
          </Tabs>
        </Box>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Grid container spacing={3}>
            {Array.isArray(currentProducts) && currentProducts.map((product, index) => (
              <Grid item xs={12} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    bgcolor: 'rgba(255, 255, 255, 0.02)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'transform 0.3s ease-in-out',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      '& .MuiListItemIcon-root': {
                        color: '#64B5F6'
                      }
                    }
                  }}
                >
                  <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                      <Box
                        component="img"
                        src={productImages[activeTab]?.[product.name] || '/images/products/default.webp'}
                        alt={product.name}
                        sx={{
                          width: '100%',
                          height: '300px',
                          objectFit: 'cover',
                          borderRadius: '12px',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={3}>
                        <Box>
                          <Typography 
                            variant="h4" 
                            component="h3" 
                            sx={{ 
                              color: '#fff',
                              fontWeight: 600,
                              mb: 1
                            }}
                          >
                            {product.name}
                          </Typography>
                          <Typography 
                            variant="h6" 
                            sx={{ 
                              color: '#64B5F6',
                              mb: 2
                            }}
                          >
                            {product.tagline}
                          </Typography>
                        </Box>
                        
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            color: 'rgba(255, 255, 255, 0.7)',
                            lineHeight: 1.7
                          }}
                        >
                          {product.description}
                        </Typography>

                        <List>
                          {Array.isArray(product.features) && product.features.map((feature, idx) => (
                            <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                              <ListItemIcon sx={{ 
                                minWidth: 36,
                                color: 'rgba(255, 255, 255, 0.7)',
                                transition: 'color 0.3s ease'
                              }}>
                                <CheckCircleOutlineIcon />
                              </ListItemIcon>
                              <ListItemText 
                                primary={feature}
                                sx={{
                                  '& .MuiListItemText-primary': {
                                    color: 'rgba(255, 255, 255, 0.7)'
                                  }
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Stack>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ProductShowcase; 