import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import SocialFabs from './SocialFabs';

import { TextField, Typography, Divider, Paper } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import validate from '../utils/validate';

import { useFirebaseAuth } from 'use-firebase-auth';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  divider: {
    margin: '1rem',
  },
  paper: {
    padding: '1rem',
    backgroundColor: 'paleturquoise',
    borderRadius: '10px',
  },
  inputFields: {
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',
    alignItems: 'start',
    paddingLeft: '2rem',
  },
  submit: {
    width: 100,
    margin: '10px auto 0',
  },
}));

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const classes = useStyles();
  const { checkEmail, checkPassword } = validate;

  const { signInWithEmailAndPassword, signInWithProvider } = useFirebaseAuth();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    signInWithEmailAndPassword(email, password);
  };

  return (
    <Paper elevation={2} className={classes.paper}>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <Typography variant="h2" gutterBottom>
            Login
          </Typography>
          <Divider />
          <div className={classes.inputFields}>
            <TextField
              error={checkEmail(email)}
              // helperText={}
              id="email"
              label="Email: "
              variant="outlined"
              onChange={handleEmailChange}
              value={email}
            />
            <TextField
              error={checkPassword(password)}
              // helperText={}
              id="password"
              label="Password: "
              variant="outlined"
              onChange={handlePasswordChange}
              value={password}
            />
          </div>
        </div>
        <button onClick={handleSubmit} className={classes.submit}>
          Submit
        </button>
        <Divider className={classes.divider} />
        <SocialFabs signInWithProvider={signInWithProvider} />
      </form>
      <Divider className={classes.divider} />
      <Link to="/signup">Register</Link>
    </Paper>
  );
}

export default Login;
