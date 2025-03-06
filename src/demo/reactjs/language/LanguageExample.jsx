import React from 'react';
import { LanguageProvider, useLanguage } from './LanguageContext';
import './LanguageExample.css';

function LanguageContent() {
  const { translations, language, setLanguage, availableLanguages } = useLanguage();

  return (
    <div className="language-demo">
      <h2>{translations.greeting}!</h2>
      <p>{translations.welcome}</p>
      <p>{translations.description}</p>
      
      <div className="language-controls">
        <p>{translations.currentLanguage}: {language.toUpperCase()}</p>
        <div className="language-buttons">
          {availableLanguages.map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={lang === language ? 'active' : ''}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function LanguageExample() {
  return (
    <LanguageProvider>
      <LanguageContent />
    </LanguageProvider>
  );
}

export default LanguageExample;