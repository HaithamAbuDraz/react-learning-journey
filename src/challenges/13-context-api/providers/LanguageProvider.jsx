import { useState } from 'react';
import LanguageContext from '../context/LanguageContext';

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('English');

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const translations = {
    English: {
      greeting: 'Hello',
      welcome: 'Welcome to our app',
      changeLanguage: 'Change Language',
      currentLanguage: 'Current Language',
    },
    Arabic: {
      greeting: 'مرحبا',
      welcome: 'مرحبا بك في تطبيقنا',
      changeLanguage: 'تغيير اللغة',
      currentLanguage: 'اللغة الحالية',
    },
    French: {
      greeting: 'Bonjour',
      welcome: 'Bienvenue sur notre application',
      changeLanguage: 'Changer de langue',
      currentLanguage: 'Langue actuelle',
    },
  };

  const trans = translations[language] || translations.English;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: changeLanguage,
        trans,
        availableLanguages: ['English', 'Arabic', 'French'],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
