import React, { useState } from 'react';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AppleBackground from '../components/AppleBackground';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Store token in localStorage
      localStorage.setItem('token', data.token);
      
      // Redirect to admin page
      navigate('/admin');
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Login failed');
    }
  };

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      <AppleBackground variant="secondary" />
      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ mt: 8, mb: 4 }}>
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
            <Typography 
              variant="h4" 
              component="h1" 
              gutterBottom 
              align="center"
              sx={{
                color: '#8be9fd',
                fontWeight: 600,
                mb: 3
              }}
            >
              Admin Login
            </Typography>

          {error && (
            <Alert 
              severity="error" 
              sx={{ 
                mb: 2,
                backgroundColor: 'rgba(211, 47, 47, 0.1)',
                color: '#e57373',
                '& .MuiAlert-icon': {
                  color: '#e57373'
                }
              }}
            >
              {error}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Username"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              margin="normal"
              required
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
              }}
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={credentials.password}
              onChange={handleChange}
              margin="normal"
              required
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
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{ 
                mt: 3,
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
              Login
            </Button>
          </form>
        </Paper>
      </Box>
    </Container>
    </Box>
  );
};

export default Login;
