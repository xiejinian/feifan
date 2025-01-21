// src/components/Footer.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: 3,
        background: 'linear-gradient(45deg, #1a237e 30%, #283593 90%)',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("/assets/tech-pattern.png")',
          opacity: 0.1,
          zIndex: 0,
        }
      }}
    >
      <Typography
        variant="body2"
        sx={{
          position: 'relative',
          zIndex: 1,
          fontWeight: 500,
          letterSpacing: 0.5
        }}
      >
        © 2020 - {new Date().getFullYear()} Feifan Tech. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;