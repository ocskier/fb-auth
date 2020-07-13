import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFirebaseAuth } from 'use-firebase-auth';

const styles = {
  login: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    width: 200,
  },
  submit: {
    width: 100,
    margin: '0 auto',
  },
};

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signInWithEmailAndPassword } = useFirebaseAuth();

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
    <div style={styles.login}>
      <div>
        <label htmlFor="email">Username: </label>
        <input
          id="email"
          onChange={handleEmailChange}
          style={styles.input}
        ></input>
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          onChange={handlePasswordChange}
          style={styles.input}
        ></input>
      </div>
      <button onClick={handleSubmit} style={styles.submit}>
        Sign on
      </button>
      <Link to="/signup">Register</Link>
    </div>
  );
}

export default Login;
