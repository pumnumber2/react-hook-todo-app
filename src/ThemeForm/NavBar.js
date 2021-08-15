import React, { useContext } from 'react'
import {
  AppBar, Toolbar, IconButton, Typography,
  InputBase, Switch,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/NavBarStyles';
import { ThemeContext } from './contexts/ThemeContext';
import { LanguageContext } from './contexts/LanguageContext'
const content = {
  english: {
    search: 'Search',
    flag: '🏴',
  },
  thai: {
    search: 'ค้นหา',
    flag: '🏁',
  },
}

const NavBar = ({ classes }) => {
  const { language } = useContext(LanguageContext);
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const { search, flag } = content[language];
  return (
    <div className={classes.root}>
      <AppBar position="static" color={isDarkTheme ? 'default' : 'primary'}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit">
            <span>{flag}</span>
          </IconButton>
          <Typography className={classes.title} variant="h6" color="inherit">
            {language}
          </Typography>
          <Switch onChange={toggleTheme} />
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder={`${search}...`}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(NavBar);
