// src/components/Footer.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        p: 2,
        backgroundColor: '#2196f3', // Change to your desired color
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2">
        © 2020 - {new Date().getFullYear()} Feifan Tech. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;