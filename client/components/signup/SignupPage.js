import React from 'react';
import createReactClass from 'create-react-class';
import SignupForm from './SignupForm';

var SignupPage = createReactClass({
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="container">
              <div className="jumbotron">
                <SignupForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default SignupPage;