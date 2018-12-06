const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
//keys for strategy
const keys = require('../config/keys');

require('../models/User');
const User = mongoose.model('users');

passport.use(new GoogleStrategy({
  clientID: keys.googleCLientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, 
  (accessToken, refreshToken, profile, done) => {
    console.log(profile.id);
     const newUser = new User({ googleID: profile.id }).save()
      .then((user) => {
        console.log("new user created, " + user.googleID)
      })
      .catch((e) => {
        console.log(e);
      });
    }
  )
);

