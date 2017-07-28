import React from 'react';
import createReactClass from 'create-react-class';

var SignupForm = createReactClass({
  getInitialState() {
    return {
      email: '',
      password: '',
      passwordConfirmation: ''
    };
  },
  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  },
  onSubmit(event){
    event.preventDefault();
    console.log(this.state);
  },
  render(){
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community!</h1>
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
          <button className="btn btn-primary btn-md">
            Sign Up
          </button>
        </div>
      </form>
    )
  }
});

export default SignupForm;