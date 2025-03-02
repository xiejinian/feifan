import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Paper,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { useTranslation } from 'react-i18next';
import AppleBackground from '../components/AppleBackground';

const Contact = () => {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState<'success' | 'error' | null>(null);
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus(null);
    setErrorMessage([]);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          setErrorMessage(data.errors);
        } else {
          setErrorMessage(['Failed to submit form']);
        }
        setFormStatus('error');
        return;
      }

      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage(['An unexpected error occurred. Please try again later.']);
      setFormStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <EmailIcon fontSize="large" />,
      title: t('contact.info.email'),
      content: 'yymhxie@gmail.com',
    },
    {
      icon: <PhoneIcon fontSize="large" />,
      title: t('contact.info.phone'),
      content: '+86 15858108106',
    },
    {
      icon: <LocationOnIcon fontSize="large" />,
      title: t('contact.info.address'),
      content: 'Hangzhou, Zhejiang, China',
    },
  ];

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      <AppleBackground variant="secondary" />
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
              {t('contact.title')}
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
              {t('contact.subtitle')}
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Box>
                  {contactInfo.map((info) => (
                    <Paper
                      key={info.title}
                      elevation={0}
                      sx={{
                        p: 3,
                        mb: 2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        borderRadius: 2,
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 6px 30px rgba(0,0,0,0.2)',
                          '& .MuiSvgIcon-root': {
                            color: '#8be9fd'
                          }
                        }
                      }}
                    >
                      <Box sx={{
                        color: '#4fc3f7',
                        transition: 'all 0.3s ease-in-out'
                      }}>
                        {info.icon}
                      </Box>
                      <Box>
                        <Typography variant="h6" gutterBottom sx={{
                          fontWeight: 600,
                          color: '#8be9fd'
                        }}>
                          {info.title}
                        </Typography>
                        <Typography sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                          {info.content}
                        </Typography>
                      </Box>
                    </Paper>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={8}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.4 }}
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
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label={t('contact.form.name')}
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: 'white',
                              '& fieldset': {
                                borderColor: 'rgba(255, 255, 255, 0.3)',
                              },
                              '&:hover fieldset': {
                                borderColor: '#4fc3f7',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#8be9fd',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'rgba(255, 255, 255, 0.7)',
                              '&.Mui-focused': {
                                color: '#8be9fd',
                              },
                            },
                            '& .MuiOutlinedInput-input': {
                              '&::placeholder': {
                                color: 'rgba(255, 255, 255, 0.5)',
                                opacity: 1,
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label={t('contact.form.email')}
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: 'white',
                              '& fieldset': {
                                borderColor: 'rgba(255, 255, 255, 0.3)',
                              },
                              '&:hover fieldset': {
                                borderColor: '#4fc3f7',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#8be9fd',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'rgba(255, 255, 255, 0.7)',
                              '&.Mui-focused': {
                                color: '#8be9fd',
                              },
                            },
                            '& .MuiOutlinedInput-input': {
                              '&::placeholder': {
                                color: 'rgba(255, 255, 255, 0.5)',
                                opacity: 1,
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label={t('contact.form.subject')}
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: 'white',
                              '& fieldset': {
                                borderColor: 'rgba(255, 255, 255, 0.3)',
                              },
                              '&:hover fieldset': {
                                borderColor: '#4fc3f7',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#8be9fd',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'rgba(255, 255, 255, 0.7)',
                              '&.Mui-focused': {
                                color: '#8be9fd',
                              },
                            },
                            '& .MuiOutlinedInput-input': {
                              '&::placeholder': {
                                color: 'rgba(255, 255, 255, 0.5)',
                                opacity: 1,
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label={t('contact.form.message')}
                          name="message"
                          multiline
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: 'white',
                              '& fieldset': {
                                borderColor: 'rgba(255, 255, 255, 0.3)',
                              },
                              '&:hover fieldset': {
                                borderColor: '#4fc3f7',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#8be9fd',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'rgba(255, 255, 255, 0.7)',
                              '&.Mui-focused': {
                                color: '#8be9fd',
                              },
                            },
                            '& .MuiOutlinedInput-input': {
                              '&::placeholder': {
                                color: 'rgba(255, 255, 255, 0.5)',
                                opacity: 1,
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          fullWidth
                          sx={{
                            py: 1.5,
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            textTransform: 'none',
                            background: 'linear-gradient(45deg, #4fc3f7 30%, #8be9fd 90%)',
                            boxShadow: '0 4px 14px 0 rgba(0,0,0,0.25)',
                            '&:hover': {
                              background: 'linear-gradient(45deg, #8be9fd 30%, #4fc3f7 90%)',
                              transform: 'translateY(-2px)',
                              boxShadow: '0 6px 20px rgba(0,0,0,0.3)'
                            }
                          }}
                        >
                          {t('contact.form.submit')}
                        </Button>
                      </Grid>
                    </Grid>
                  </form>

                  {formStatus === 'success' && (
                    <Alert
                      severity="success"
                      sx={{
                        mt: 2,
                        backgroundColor: 'rgba(46, 125, 50, 0.1)',
                        color: '#81c784',
                        '& .MuiAlert-icon': {
                          color: '#81c784'
                        }
                      }}
                    >
                      {t('contact.form.success')}
                    </Alert>
                  )}
                  {formStatus === 'error' && (
                    <Alert
                      severity="error"
                      sx={{
                        mt: 2,
                        backgroundColor: 'rgba(211, 47, 47, 0.1)',
                        color: '#e57373',
                        '& .MuiAlert-icon': {
                          color: '#e57373'
                        }
                      }}
                    >
                      {errorMessage.map((error, index) => (
                        <div key={index}>{error}</div>
                      ))}
                    </Alert>
                  )}
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
