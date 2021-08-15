import React, { useContext } from 'react'
import {
  Paper, Avatar, Typography, Select,
  MenuItem, FormControl, InputLabel,
  Input, FormControlLabel, Checkbox,
  Button,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { LockOutlined } from '@material-ui/icons';
import styles from './styles/FormStyles';
import { LanguageContext } from './contexts/LanguageContext';
const words = {
  english: {
    email: 'Email',
    password: 'Password',
    rememberMe: 'Remember me',
    signIn: 'Sign in'
  },
  thai: {
    email: 'อีเมลล์',
    password: 'รหัสผ่าน',
    rememberMe: 'จดจำฉัน',
    signIn: 'ลงชื่อเข้าใช้',
  },
};

const ThemeForm = ({ classes }) => {
  const { language, changeLanguage } = useContext(LanguageContext);
  const { email, password, rememberMe, signIn } = words[language];
  const controlledCheckbox = (
    <Checkbox color="primary" />
  );
  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography variant="h5">
          {signIn}
        </Typography>
        <Select
          value={language}
          onChange={(e) => {
            changeLanguage(e.target.value);
          }}
        >
          <MenuItem value="english">English</MenuItem>
          <MenuItem value="thai">ไทย</MenuItem>
        </Select>
        <form className={classes.form}>
          <FormControl
            margin="normal"
            required
            fullWidth
          >
            <InputLabel
              htmlFor="email"
            >
              {email}
            </InputLabel>
            <Input
              id="email"
              name="email"
              autoFocus
            />
          </FormControl>
          <FormControl
            margin="normal"
            required
            fullWidth
          >
            <InputLabel
              htmlFor="password"
            >
              {password}
            </InputLabel>
            <Input
              id="password"
              name="password"
              autoFocus
              type="password"
            />
          </FormControl>
          <FormControlLabel
            control={controlledCheckbox}
            label={rememberMe}
          />
          <Button
            className={classes.submit}
            variant="contained"
            type="submit"
            fullWidth
            color="primary"
          >
            {signIn}
          </Button>
        </form>
      </Paper>
    </main>
  )
};

export default withStyles(styles)(ThemeForm);
