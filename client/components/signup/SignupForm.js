import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import _ from 'lodash';

import data from '../../data/data';

var SignupForm = createReactClass({
  getInitialState() {
    return {
      email: '',
      password: '',
      passwordConfirmation: '',
      data: ''
    };
  },
  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  },
  onSubmit(event){
    event.preventDefault();
    this.props.userSignupRequest(this.state);
  },
  render(){
    const options = _.map(data, (val, key) => {
      return (
        <option key={val} value={val}>{key}</option>
      )
    });
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Sign Up Page</h1>
        <br/>
        <div className="form-group">
          <label htmlFor="" className="control-label">Email</label>
          <input
            value={this.state.email}
            onChange={this.onChange}
            type="email"
            name="email"
            className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="" className="control-label">Password</label>
          <input
            value={this.state.password}
            onChange={this.onChange}
            type="password"
            name="password"
            className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="" className="control-label">Confirm Password</label>
          <input
            value={this.state.passwordConfirmation}
            onChange={this.onChange}
            type="password"
            name="passwordConfirmation"
            className="form-control"/>
        </div>
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
          <button className="btn btn-primary btn-md">
            Sign Up
          </button>
        </div>
      </form>
    )
  }
});

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
};

export default SignupForm;