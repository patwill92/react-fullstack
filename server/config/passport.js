import passport from 'passport';

const LocalStrategy = require('passport-local').Strategy;

import User from '../models/user';

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    })
  });

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, (req, email, password, done) => {
    User.findOne({'email': email}, (err, user) => {
      if (err)
        return done(err);
      if (user) {
        console.log('USER EXISTS');
        return done(null, false, req.flash('signupMessage', 'Email already exists'));
      } else {
        let newUser = new User();
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);
        newUser.save((err) => {
          if (err)
            throw err;
          return done(null, newUser);
        });
      }
    });
  }));

};

