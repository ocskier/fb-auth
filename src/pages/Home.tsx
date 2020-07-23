import React from 'react';

import { useFirebaseAuth } from 'use-firebase-auth';

import logo from '../logo.svg';

export default function Home() {
  const { user, signOut } = useFirebaseAuth();

  return (
    <header className="App-header">
      <span onClick={signOut}>Logout</span>
      <img src={user.photoURL ? user.photoURL : logo} className="App-logo" alt="logo" />
      <p>Your react app code goes here!</p>
    </header>
  );
}
