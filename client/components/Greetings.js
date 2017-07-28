import React from 'react';
import createReactClass from 'create-react-class';

var Greetings = createReactClass({
  render(){
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Greetings!</h1>
        </div>
      </div>
    )
  }
});

export default Greetings;