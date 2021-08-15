import React, { createContext } from 'react';
import useToggleState from '../../customHook/useToggleState';
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, toggleTheme] = useToggleState();
  return (
    <ThemeContext.Provider
      value={{ isDarkTheme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
