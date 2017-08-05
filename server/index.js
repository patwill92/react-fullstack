import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import session  from 'express-session';
import passport  from 'passport';
import cookieParser  from 'cookie-parser';
import flash from 'connect-flash';
const MongoStore = require('connect-mongo')(session);

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev.js';

const LocalStrategy = require('passport-local').Strategy;
import users from './routes/users';
import User from './models/user';

import validateInput from './shared/validations/signup';


let app = express();

mongoose.connect('mongodb://127.0.0.1/allgroup');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  secret: 'secret',
  saveUninitialized: false,
  resave: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  cookie: { maxAge: 180 * 60 * 1000 }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});

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
  process.nextTick(() => {
    User.findOne({email}, (err, user) => {
      if (err)
        return done(err);
      if (user) {
        console.log('USER EXISTS');
        return done(null, false, req.flash('signupMessage', 'User already exists!'));
      } else {
        let newUser = new User();
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);
        newUser.save((err) => {
          if (err)
            throw err;
          return done(null, newUser, req.flash('signupMessage', 'Successful sign in!'));
        });
      }
    });
  })
}));

app.post('/api/users', passport.authenticate('local-signup'), (req, res) => {
  const {errors, isValid} = validateInput(req.body);
  if (isValid) {
    res.json({success: true, msg: req.flash('signupMessage')});
  } else {
    res.status(400).json(errors);
  }
});

// app.use('/api/users', users);

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => console.log('Running on 3000'));