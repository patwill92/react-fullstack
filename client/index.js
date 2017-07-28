import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './routes';

render (
  <Router>
    { routes }
  </Router>,
  document.getElementById('app')
);