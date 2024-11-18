import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useLanguagePreference = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Get stored language preference
    const storedLang = localStorage.getItem('i18nextLng');
    
    if (!storedLang) {
      // If no stored preference, detect browser language
      const browserLang = navigator.language.split('-')[0];
      const supportedLangs = ['en', 'zh', 'ja', 'ko'];
      
      // Set to browser language if supported, otherwise default to English
      const defaultLang = supportedLangs.includes(browserLang) ? browserLang : 'en';
      i18n.changeLanguage(defaultLang);
      localStorage.setItem('i18nextLng', defaultLang);
    }
  }, [i18n]);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('i18nextLng', lang);
  };

  return {
    currentLanguage: i18n.language,
    changeLanguage,
    supportedLanguages: ['en', 'zh', 'ja', 'ko'] as const
  };
};
