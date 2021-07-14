import React from 'react';
import SignInPage from './pages/SignInPage';
import {Switch, BrowserRouter as Router} from 'react-router';
import HomePage from './pages/HomePage';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
function App() {
  return (
          <Switch>
        <PublicRoute path="/signin">
          <SignInPage />
        </PublicRoute>
        <PrivateRoute path="/">
          <HomePage />
        </PrivateRoute>
      </Switch>
  );
}

export default App;
