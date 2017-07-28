import React from 'react';
import { Route } from 'react-router-dom';

import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage'

export default (
  <div>
    <App />
    <Route exact path="/" component={Greetings} />
    <Route path="/signup" component={SignupPage} />
  </div>
)