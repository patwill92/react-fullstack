import React from 'react';
import createReactClass from 'create-react-class';
import Navbar from './Navbar';
import FlashMessagesList from './flash/FlashMessagesList';

var App = createReactClass({
    render(){
      return (
        <div className="container">
          <Navbar />
          <FlashMessagesList />
        </div>
      )
    }
  });

export default App;