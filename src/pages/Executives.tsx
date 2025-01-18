import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
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
  // Add more executives as needed
];

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

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
              <StyledCard>
                <CardMedia
                  component="img"
                  height="300"
                  image={executive.imageUrl}
                  alt={executive.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {executive.name}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    {t(executive.position)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t(executive.bio)}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ExecutivesPage;