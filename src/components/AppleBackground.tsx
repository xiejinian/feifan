import React from 'react';
import { Box } from '@mui/material';
import { keyframes } from '@mui/system';

const gradientShift = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const meshAnimation = keyframes`
  0% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(30px, 20px) scale(1.1);
  }
  100% {
    transform: translate(0, 0) scale(1);
  }
`;

interface AppleBackgroundProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const AppleBackground: React.FC<AppleBackgroundProps> = ({ variant = 'primary' }) => {
  const getGradientColors = () => {
    switch (variant) {
      case 'secondary':
        return {
          primary: 'rgba(64, 76, 191, 0.9)',
          secondary: 'rgba(28, 35, 126, 0.95)',
          accent: 'rgba(139, 233, 253, 0.1)'
        };
      case 'tertiary':
        return {
          primary: 'rgba(48, 63, 159, 0.9)',
          secondary: 'rgba(26, 35, 126, 0.95)',
          accent: 'rgba(79, 195, 247, 0.1)'
        };
      default:
        return {
          primary: 'rgba(26, 35, 126, 0.95)',
          secondary: 'rgba(13, 17, 63, 0.9)',
          accent: 'rgba(139, 233, 253, 0.15)'
        };
    }
  };

  const colors = getGradientColors();

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 50% 50%, ${colors.accent} 0%, transparent 60%)`,
          animation: `${gradientShift} 15s ease infinite`,
          backgroundSize: '400% 400%',
          opacity: 0.8,
          zIndex: 0,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '120%',
          height: '60%',
          background: `radial-gradient(ellipse at center, ${colors.accent} 0%, transparent 70%)`,
          transform: 'rotate(-3deg)',
          animation: `${meshAnimation} 20s ease infinite`,
          zIndex: 0,
        },
        zIndex: -1,
      }}
    />
  );
};

export default AppleBackground;