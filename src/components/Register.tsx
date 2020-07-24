import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { TextField, Typography, Divider, Paper } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import ReplayIcon from '@material-ui/icons/Replay';

import validate from '../utils/validate';

import { useFirebaseAuth } from 'use-firebase-auth';

const useStyles = makeStyles((theme: Theme) => ({
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
    borderRadius: '10px',
    marginTop: '-100px',
    minWidth: 400,
  },
  inputFields: {
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',
    alignItems: 'start',
    paddingLeft: '2rem',
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
  const { checkEmail, checkPassword } = validate;

  const { createUserWithEmailAndPassword } = useFirebaseAuth();

  const handleRegisterEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRegisterEmail(event.target.value);
  };

  const handleRegisterPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRegisterPassword(event.target.value);
  };

  const handleRegisterSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    createUserWithEmailAndPassword(registerEmail, registerPassword);
  };

  return (
    <Paper elevation={2} className={classes.paper}>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <Link to="/">
            <ReplayIcon className={classes.replay}></ReplayIcon>
          </Link>
          <Typography variant="h2" gutterBottom>
            Register
          </Typography>
          <Divider />
          <div className={classes.inputFields}>
            <TextField
              error={checkEmail(registerEmail)}
              id="email"
              label="Email: "
              variant="outlined"
              onChange={handleRegisterEmailChange}
              value={registerEmail}
              helperText={checkEmail(registerEmail)}
            />
            <TextField
              error={checkPassword(registerPassword)}
              id="password"
              label="Password: "
              helperText={checkPassword(registerPassword)}
              variant="outlined"
              onChange={handleRegisterPasswordChange}
              value={registerPassword}
            />
          </div>
        </div>
        <button onClick={handleRegisterSubmit} className={classes.submit}>
          Submit
        </button>
      </form>
    </Paper>
  );
}
