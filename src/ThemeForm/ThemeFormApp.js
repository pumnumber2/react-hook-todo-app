import React, { Component } from 'react'
import NavBar from './NavBar';
import ThemeForm from './ThemeForm';
import PageContent from './PageContent';
import { ThemeProvider } from './contexts/ThemeContext';

export default class ThemeFormApp extends Component {
  render() {
    return (
      <ThemeProvider>
        <PageContent>
          <NavBar />
          <ThemeForm />
        </PageContent>
      </ThemeProvider>
    )
  }
}
