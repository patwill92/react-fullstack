import express from 'express';
import Validator from 'validator';
import _ from 'lodash';

let router = express.Router();

function validateInput(data) {
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

router.post('/', (req, res) => {
  const { errors, isValid } = validateInput(req.body);
  if(!isValid) {
    res.status(400).json(errors);
  }
});

export default router;