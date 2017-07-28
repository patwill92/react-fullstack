import React from 'react';
import createReactClass from 'create-react-class';
import SignupForm from './SignupForm';

var SignupPage = createReactClass({
  render(){
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <div className="container">
            <div className="jumbotron">
              <SignupForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default SignupPage;