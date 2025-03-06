import React, { createContext, useState, useContext } from 'react';

// Define translations
const translations = {
  en: {
    greeting: 'Hello',
    welcome: 'Welcome to our app',
    switchLanguage: 'Switch Language',
    currentLanguage: 'Current Language',
    description: 'This is a demo of language switching in React'
  },
  zh: {
    greeting: '你好',
    welcome: '欢迎使用我们的应用',
    switchLanguage: '切换语言',
    currentLanguage: '当前语言',
    description: '这是一个 React 语言切换示例'
  },
  es: {
    greeting: 'Hola',
    welcome: 'Bienvenido a nuestra aplicación',
    switchLanguage: 'Cambiar idioma',
    currentLanguage: 'Idioma actual',
    description: 'Esta es una demostración del cambio de idioma en React'
  },
  fr: {
    greeting: 'Bonjour',
    welcome: 'Bienvenue dans notre application',
    switchLanguage: 'Changer de langue',
    currentLanguage: 'Langue actuelle',
    description: 'Ceci est une démonstration du changement de langue dans React'
  },
  ja: {
    greeting: 'こんにちは',
    welcome: 'アプリへようこそ',
    switchLanguage: '言語を切り替える',
    currentLanguage: '現在の言語',
    description: 'Reactでの言語切り替えのデモです'
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const value = {
    language,
    setLanguage,
    translations: translations[language],
    availableLanguages: Object.keys(translations),
    // Updated to cycle through all available languages
    toggleLanguage: () => {
      const languages = Object.keys(translations);
      const currentIndex = languages.indexOf(language);
      const nextIndex = (currentIndex + 1) % languages.length;
      setLanguage(languages[nextIndex]);
    }
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}