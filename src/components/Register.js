import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { TextField, Typography, Divider, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReplayIcon from '@material-ui/icons/Replay';

import { isEmail } from 'validator';

import { useFirebaseAuth } from 'use-firebase-auth';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  paper: {
    padding: '1rem',
    backgroundColor: 'paleturquoise',
    position: 'relative',
  },
  replay: {
    position: 'absolute',
    left: '5px',
    top: '5px',
  },
  submit: {
    width: 100,
    margin: '0 auto',
  },
}));

export default function Register() {
  const classes = useStyles();
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const { createUserWithEmailAndPassword } = useFirebaseAuth();

  const handleRegisterEmailChange = (event) => {
    setRegisterEmail(event.target.value);
  };

  const handleRegisterPasswordChange = (event) => {
    setRegisterPassword(event.target.value);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(registerEmail, registerPassword);
  };

  return (
    <Paper className={classes.paper}>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <Link to="/">
            <ReplayIcon className={classes.replay}></ReplayIcon>
          </Link>
          <Typography variant="h2" gutterBottom>
            Register
          </Typography>
          <Divider />
          <TextField
            error={!isEmail(registerEmail)}
            id="email"
            label="Email: "
            variant="outlined"
            onChange={handleRegisterEmailChange}
            value={registerEmail}
          />
          <TextField
            error={registerPassword.length < 8}
            id="password"
            label="Password: "
            helperText={
              registerPassword.length < 8 ? 'Must be 8 chars long!' : ''
            }
            variant="outlined"
            onChange={handleRegisterPasswordChange}
            value={registerPassword}
          />
        </div>
        <button onClick={handleRegisterSubmit} className={classes.submit}>
          Submit
        </button>
      </form>
    </Paper>
  );
}
