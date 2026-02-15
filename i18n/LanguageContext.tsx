import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from './en';
import { es } from './es';

type Lang = 'en' | 'es';
type Translations = typeof en;

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: en,
});

function getInitialLang(): Lang {
  const stored = localStorage.getItem('lang');
  if (stored === 'es' || stored === 'en') return stored;
  const browserLang = navigator.language || '';
  return browserLang.startsWith('es') ? 'es' : 'en';
}

const dictionaries: Record<Lang, Translations> = { en, es };

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem('lang', newLang);
    document.documentElement.lang = newLang;
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
