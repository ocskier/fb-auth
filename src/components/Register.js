import React, { useState } from 'react';
import { useFirebaseAuth } from 'use-firebase-auth';

const styles = {
  register: {
    display: 'flex',
    flexDirection: 'column',
    alignItem: 'center'
  },
  input: {
    width: 200,
  },
  submit: {
    width: 100,
    margin: '0 auto',
  },
};

export default function Register() {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const { createUserWithEmailAndPassword } = useFirebaseAuth();

  const handleRegisterEmailChange = (event) => {
    setRegisterEmail(event.target.value);
  };

  const handleRegisterPasswordChange = (event) => {
    setRegisterPassword(event.target.value);
  };

  const handleRegisterSubmit = () => {
    createUserWithEmailAndPassword(registerEmail, registerPassword);
  };

  return (
    <div style={styles.register}>
      <div>
        <label htmlFor="email">Username: </label>
        <input
          id="email"
          onChange={handleRegisterEmailChange}
          style={styles.input}
        ></input>
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          onChange={handleRegisterPasswordChange}
          style={styles.input}
        ></input>
      </div>
      <button onClick={handleRegisterSubmit} style={styles.submit}>
        Register
      </button>
    </div>
  );
}
