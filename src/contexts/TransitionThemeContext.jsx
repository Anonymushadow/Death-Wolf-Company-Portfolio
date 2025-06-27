import { createContext, useContext } from 'react';
import { useThemeTransitionCore } from '@hooks/useThemeTransitionCore';

const ThemeTransitionContext = createContext();

export const ThemeTransitionProvider = ({ children }) => {
  const contextValue = useThemeTransitionCore();

  return (
    <ThemeTransitionContext.Provider value={contextValue}>
      {children}
    </ThemeTransitionContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeTransition = () => useContext(ThemeTransitionContext);