import React, { Component } from 'react'
import {
  Paper, Avatar, Typography, Select,
  MenuItem, FormControl, InputLabel,
  Input, FormControlLabel, Checkbox,
  Button,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { LockOutlined } from '@material-ui/icons';
import styles from './styles/FormStyles';
class ThemeForm extends Component {
  render() {
    const { classes } = this.props;
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
            Sign in
          </Typography>
          <Select value="english">
            <MenuItem value="english">English</MenuItem>
            <MenuItem value="french">French</MenuItem>
            <MenuItem value="spanish">Spanish</MenuItem>
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
                Email
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
                Password
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
              label="Remember me"
            />
            <Button
              className={classes.submit}
              variant="contained"
              type="submit"
              fullWidth
              color="primary"
            >
              Sign In
            </Button>
          </form>
        </Paper>
      </main>
    )
  }
}

export default withStyles(styles)(ThemeForm);
