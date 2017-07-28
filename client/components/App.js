import React from 'react';
import createReactClass from 'create-react-class';
import Navbar from './Navbar';

var App = createReactClass({
    render(){
      return (
        <div className="container">
          <Navbar />
        </div>
      )
    }
  });

export default App;