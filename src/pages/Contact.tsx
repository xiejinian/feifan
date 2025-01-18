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
    <Container>
      <Box sx={{ py: 8 }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" component="h1" gutterBottom textAlign="center">
            {t('contact.title')}
          </Typography>
          <Typography
            variant="h5"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 6 }}
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
                    }}
                  >
                    <Box sx={{ color: 'primary.main' }}>{info.icon}</Box>
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        {info.title}
                      </Typography>
                      <Typography color="text.secondary">{info.content}</Typography>
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
              <Paper elevation={0} sx={{ p: 4 }}>
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
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                      >
                        {t('contact.form.submit')}
                      </Button>
                    </Grid>
                  </Grid>
                </form>

                {formStatus === 'success' && (
                  <Alert severity="success" sx={{ mt: 2 }}>
                    {t('contact.form.success')}
                  </Alert>
                )}
                {formStatus === 'error' && (
                  <Alert severity="error" sx={{ mt: 2 }}>
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
  );
};

export default Contact;
