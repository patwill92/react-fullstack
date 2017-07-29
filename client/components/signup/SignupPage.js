import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SignupForm from './SignupForm';
import { userSignupRequest } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages';

var SignupPage = createReactClass({
  render(){
    const { userSignupRequest, addFlashMessage } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="container">
              <div className="jumbotron">
                <SignupForm userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessage}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

SignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
};

export default connect(null , { userSignupRequest, addFlashMessage })(SignupPage);