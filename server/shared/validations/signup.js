import Validator from 'validator';
import _ from 'lodash';

export default function validateInput(data) {
  let errors = {};
  if(!Validator.isEmail(data.email)){
    if(Validator.isEmpty(data.email)){
      errors.email = 'Email is required';
    } else{
      errors.email = 'Email is invalid';
    }
  }
  if(Validator.isEmpty(data.password)){
    errors.password = 'Password is required';
  }
  if(Validator.isEmpty(data.passwordConfirmation)){
    errors.passwordConfirmation = 'Password confirmation is required';
  }
  if(!Validator.equals(data.password, data.passwordConfirmation)){
    errors.passwordConfirmation = 'Passwords must match'
  }
  return {
    errors,
    isValid: _.isEmpty(errors)
  }
}