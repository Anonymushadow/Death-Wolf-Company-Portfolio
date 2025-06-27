import { createContext, useContext } from 'react';
import { useLanguage } from '@hooks/useLanguage';

const LangContext = createContext();

export const LanguageProvider = ({ children }) => {
  const langData = useLanguage();

  return (
    <LangContext.Provider value={langData}>
      {children}
    </LangContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLang = () => useContext(LangContext);
