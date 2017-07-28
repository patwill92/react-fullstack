import React from 'react';
import { Route } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home';
import SignupPage from './components/signup/SignupPage'

export default (
  <div>
    <App />
    <Route exact path="/" component={Home} />
    <Route path="/signup" component={SignupPage} />
  </div>
)