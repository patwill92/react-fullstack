import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Redirect } from 'react-router-dom';

import TextFieldGroup from '../common/TextFieldGroup';

import data from '../../data/data';
import validateInput from '../../../server/shared/validations/signup';

var SignupForm = createReactClass({
  getInitialState() {
    return {
      email: '',
      password: '',
      passwordConfirmation: '',
      data: '',
      errors: {},
      isLoading: false
    };
  },

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  },
  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if(!isValid){
      this.setState({ errors });
    }
    return isValid;
  },
  onSubmit(event){
    event.preventDefault();
    if(this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.userSignupRequest(this.state).then(
        () => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'Login Successful!'
          });
          this.setState({shouldRedirect: true})
        },
        (err) => this.setState({ errors: err.response.data, isLoading: false})
      );
    }
  },
  render(){
    const { errors } = this.state;
    const options = _.map(data, (val, key) => {
      return (
        <option key={val} value={val}>{key}</option>
      )

    });
    if(this.state.shouldRedirect){
      return (
        <Redirect to={'/'}/>
      )
    }
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Sign Up Page</h1>
        <br/>
        <TextFieldGroup
          error={errors.email}
          label="Email"
          onChange={this.onChange}
          value={this.state.email}
          field="email"
        />
        <TextFieldGroup
          error={errors.password}
          label="Password"
          onChange={this.onChange}
          value={this.state.password}
          field="password"
          type="password"
        />
        <TextFieldGroup
          error={errors.passwordConfirmation}
          label="Confirm Password"
          onChange={this.onChange}
          value={this.state.passwordConfirmation}
          field="passwordConfirmation"
          type="password"
        />
        <div className="form-group">
          <label htmlFor="" className="control-label">Test Data</label>
          <select
            value={this.state.data}
            onChange={this.onChange}
            name="data"
            className="form-control">
            <option value="" disabled>Default message</option>
            { options }
          </select>
        </div>
        <div className="form-group">
          <button disabled={this.state.isLoading} className="btn btn-primary btn-md">
            Sign Up
          </button>
        </div>
      </form>
    )
  }
});

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
};


export default SignupForm;

