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
import CircularProgress from './components/CircularProgress';

import './App.css';

function App() {
  const { user, loading, error } = useFirebaseAuth();
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
        {!user && !loading && (
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Register} />
          </Switch>
        )}
        {loading && (
          <CircularProgress />
        )}
      </div>
    </Router>
  );
}

export default App;
