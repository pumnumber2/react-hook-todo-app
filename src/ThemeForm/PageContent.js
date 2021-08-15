import React, { useContext } from 'react'
import { ThemeContext } from './contexts/ThemeContext';

const PageContent = ({ children }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  const styles = {
    backgroundColor: isDarkTheme ? 'black' : 'white',
    height: '100vh',
    width: '100vw',
  };
  return (
    <div style={styles}>
      {children}
    </div>
  )
}

export default PageContent;
