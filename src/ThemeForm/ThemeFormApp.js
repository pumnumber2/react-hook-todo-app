import React from 'react'
import NavBar from './NavBar';
import ThemeForm from './ThemeForm';
import PageContent from './PageContent';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

const ThemeFormApp = () => {
  return (
    <ThemeProvider>
      <PageContent>
        <LanguageProvider>
          <NavBar />
          <ThemeForm />
        </LanguageProvider>
      </PageContent>
    </ThemeProvider>
  );
};

export default ThemeFormApp;
