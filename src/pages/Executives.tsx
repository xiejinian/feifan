import React from 'react';
import { Container, Typography, Grid, CardContent, Box, Avatar } from '@mui/material';
// import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

interface Executive {
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
}

const executives: Executive[] = [
  {
    name: "Yufeng Li",
    position: "executives.positions.ceo",
    bio: "executives.bios.ceo",
    imageUrl: "/assets/executives/ceo.jpg"
  },
  {
    name: "Jinian Xie",
    position: "executives.positions.cto",
    bio: "executives.bios.cto",
    imageUrl: "/assets/executives/cto.jpg"
  },
  {
    name: "Deliang Wen",
    position: "executives.positions.cai_scientist",
    bio: "executives.bios.cai_scientist",
    imageUrl: "/assets/executives/cai_scientist.jpg"
  },
  {
    name: "Jixiang Qin",
    position: "executives.positions.cps_scientist",
    bio: "executives.bios.cps_scientist",
    imageUrl: "/assets/executives/cps_scientist.png"
  },
  {
    name: "Han Kong",
    position: "executives.positions.chs_scientist",
    bio: "executives.bios.chs_scientist",
    imageUrl: "/assets/executives/chs_scientist.jpg"
  },
  // Add more executives as needed
];

// const StyledCard = styled(Card)(({ theme }) => ({
//   height: '100%',
//   display: 'flex',
//   flexDirection: 'column',
//   transition: 'transform 0.2s',
//   '&:hover': {
//     transform: 'scale(1.02)',
//   },
// }));

const ExecutivesPage = () => {
  const { t } = useTranslation();
  
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        {t('executives.title')}
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        {t('executives.subtitle')}
      </Typography>
      <Box sx={{ mt: 6 }}>
        <Grid container spacing={4}>
          {executives.map((executive, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Box sx={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                px: 2
              }}>
                <Avatar
                  alt={executive.name}
                  src={executive.imageUrl}
                  sx={{ 
                    width: 150,
                    height: 150,
                    borderRadius: '50%',
                    boxShadow: 3,
                    mb: 2
                  }}
                />
                <CardContent sx={{ 
                  width: '100%',
                  textAlign: 'center',
                  px: 0
                }}>
                  <Typography gutterBottom variant="h5" component="h2" sx={{ textAlign: 'center' }}>
                    {executive.name}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" gutterBottom sx={{ textAlign: 'center' }}>
                    {t(executive.position)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ 
                    textAlign: 'center',
                    maxWidth: '300px',
                    mx: 'auto'
                  }}>
                    {t(executive.bio)}
                  </Typography>
                </CardContent>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ExecutivesPage;