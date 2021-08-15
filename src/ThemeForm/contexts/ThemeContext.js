import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

export class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkTheme: false,
    };
  }
  render() {
    return (
      <ThemeContext.Provider
        value={{
          ...this.state,
          toggleTheme: () => { this.setState({ isDarkTheme: !this.state.isDarkTheme }) },
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
};

