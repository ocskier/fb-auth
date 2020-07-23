import React from 'react';

import clsx from 'clsx';

// Material UI imports
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    background: 'white',
    color: '#444',
    width: 'auto',
    minWidth: '250px',
    borderRadius: '5px',
    border: 'thin solid #888',
    boxShadow: '1px 1px 1px grey',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: '#d5d5d5',
      transform: 'scale(1.05)',
    },
  },
  buttonText: {
    display: 'inline-block',
    verticalAlign: 'middle',
    paddingLeft: '42px',
    paddingRight: '42px',
    fontSize: '14px',
    fontWeight: 'bold',
    fontFamily: '"Roboto", sans-serif',
  },
  socialFab: {
    display: 'inline-block',
    margin: '6px',
    whiteSpace: 'nowrap',
  },
  facebookIcon: {
    background:
      'url("images/iconfinder_facebook_317746.png") transparent 5px 50% no-repeat',
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '50px',
    height: '50px',
  },
  googleIcon: {
    background:
      'url("images/icons8-google-48.png") transparent 5px 50% no-repeat',
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '50px',
    height: '50px',
  },
}));

function SocialFabs({ signInWithProvider }) {
  const classes = useStyles();

  return (
    <div className={classes.socialDiv}>
      <div
        className={clsx(classes.socialFab, classes.button)}
        onClick={() => signInWithProvider('google')}
      >
        <span className={classes.googleIcon}></span>
        <span className={classes.buttonText}>Login with Google</span>
      </div>

      <div
        className={clsx(classes.socialFab, classes.button)}
        onClick={() => signInWithProvider('facebook')}
      >
        <span className={classes.facebookIcon}></span>
        <span className={classes.buttonText}>Login with Facebook</span>
      </div>
    </div>
  );
}

export default SocialFabs;
