import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { useFirebaseAuth } from 'use-firebase-auth';

import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';

import './App.css';

function App() {
  const { user, loading, error, signInWithProvider } = useFirebaseAuth();
  console.log(user, loading);

  return (
    <Router>
      <div className="App">
        {user && (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={() => <Redirect to="/" />} />
          </Switch>
        )}
        {!user && (
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Register} />
          </Switch>
        )}
      </div>
    </Router>
  );
}

export default App;
