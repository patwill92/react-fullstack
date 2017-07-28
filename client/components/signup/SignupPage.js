import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SignupForm from './SignupForm';
import { userSignupRequest } from '../../actions/signupActions';

var SignupPage = createReactClass({
  render(){
    const { userSignupRequest } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="container">
              <div className="jumbotron">
                <SignupForm userSignupRequest={userSignupRequest} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

SignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
};

export default connect(null , { userSignupRequest })(SignupPage);