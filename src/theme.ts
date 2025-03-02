import { createTheme, ThemeOptions } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  shape: {
    borderRadius: 12
  },
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // Light mode
        primary: {
          main: '#007AFF',
          light: '#5856D6',
          dark: '#0055FF',
        },
        secondary: {
          main: '#34C759',
          light: '#30D158',
          dark: '#248A3D',
        },
        background: {
          default: '#F5F5F7',
          paper: '#FFFFFF',
        },
        text: {
          primary: '#1D1D1F',
          secondary: '#86868B',
        },
      }
      : {
        // Dark mode
        primary: {
          main: '#0A84FF',
          light: '#5E5CE6',
          dark: '#0066CC',
        },
        secondary: {
          main: '#30D158',
          light: '#32D74B',
          dark: '#28B13B',
        },
        background: {
          default: '#000000',
          paper: '#1C1C1E',
        },
        text: {
          primary: '#F5F5F7',
          secondary: '#86868B',
        },
      }),
  },
  typography: {
    fontFamily: '"-apple-system", "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      letterSpacing: '-0.015em',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    body1: {
      fontSize: '1.0625rem',
      lineHeight: 1.5,
      letterSpacing: '-0.01em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          padding: '8px 24px',
          fontWeight: 600,
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.02)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderRadius: 16,
          transition: 'all 0.3s ease-in-out',
        },
      },
    },
  },
});

export const createCustomTheme = (mode: PaletteMode) => {
  return createTheme(getDesignTokens(mode));
};

export default createCustomTheme('light');
