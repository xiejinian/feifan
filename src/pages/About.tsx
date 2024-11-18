import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

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
            About FeiFan Tech
          </Typography>
          <Typography variant="h5" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
            Empowering Businesses Through Technology
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Paper elevation={0} sx={{ p: 4, height: '100%' }}>
                <Typography variant="h4" gutterBottom>
                  Our Mission
                </Typography>
                <Typography paragraph>
                  At FeiFan Tech, we are dedicated to delivering innovative software solutions
                  that empower businesses to thrive in the digital age. Our mission is to
                  transform complex challenges into elegant, efficient solutions.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Paper elevation={0} sx={{ p: 4, height: '100%' }}>
                <Typography variant="h4" gutterBottom>
                  Our Values
                </Typography>
                <Typography paragraph>
                  • Excellence in every line of code<br />
                  • Client-focused development<br />
                  • Innovative problem-solving<br />
                  • Continuous improvement<br />
                  • Transparent communication
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Box sx={{ mt: 6 }}>
            <Typography variant="h4" gutterBottom textAlign="center">
              Why Choose Us?
            </Typography>
            <Typography paragraph textAlign="center" sx={{ maxWidth: 800, mx: 'auto' }}>
              With years of experience in software development and a passionate team of
              experts, we bring both technical excellence and business acumen to every
              project. We don't just write code; we create solutions that drive your
              business forward.
            </Typography>
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default About;
