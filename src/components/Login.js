import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import SocialFabs from './SocialFabs';

import { TextField, Typography, Divider, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { isEmail } from 'validator';

import { useFirebaseAuth } from 'use-firebase-auth';

const useStyles = makeStyles((theme) => ({
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

  const { signInWithEmailAndPassword, signInWithProvider } = useFirebaseAuth();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    signInWithEmailAndPassword(email, password);
  };

  return (
    <Paper className={classes.paper}>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <Typography variant="h2" gutterBottom>
            Login
          </Typography>
          <Divider />
          <TextField
            error={!isEmail(email)}
            id="email"
            label="Email: "
            variant="outlined"
            onChange={handleEmailChange}
            value={email}
          />
          <TextField
            error={password.length < 8}
            id="password"
            label="Password: "
            variant="outlined"
            onChange={handlePasswordChange}
            value={password}
          />
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
