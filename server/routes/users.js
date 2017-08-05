import express from 'express';
import validateInput from '../shared/validations/signup';
import passport from 'passport';

const LocalStrategy = require('passport-local').Strategy;
import flash from 'connect-flash';

let router = express.Router();

import User from '../models/user';

router.post('/', passport.authenticate('local-signup'), (req, res) => {
  const {errors, isValid} = validateInput(req.body);
  if (isValid) {
    res.json({success: true});
  } else {
    res.status(400).json(errors);
  }
});

export default router;