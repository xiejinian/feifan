import React from 'react';
import { Box, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { useLanguagePreference } from '../hooks/useLanguagePreference';

const LanguageSwitcher: React.FC = () => {
  const { currentLanguage, changeLanguage } = useLanguagePreference();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'zh', name: '中文' },
    { code: 'ja', name: '日本語' },
    { code: 'ko', name: '한국어' }
  ];

  const handleChange = (event: SelectChangeEvent<string>) => {
    changeLanguage(event.target.value);
  };

  return (
    <Box>
      <Select
        value={currentLanguage}
        onChange={handleChange}
        sx={{
          color: 'white',
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.5)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.8)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
          },
          '.MuiSvgIcon-root': {
            color: 'white',
          },
          '.MuiSelect-select': {
            py: 1,
            px: 2,
          },
        }}
        variant="outlined"
        size="small"
      >
        {languages.map((lang) => (
          <MenuItem key={lang.code} value={lang.code}>
            {lang.name}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default LanguageSwitcher;
