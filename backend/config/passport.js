const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("User");
const keys = require("../config/keys");
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require("bcryptjs");
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;
module.exports = passport => {
  // configure passport.js to use the local strategy
  passport.use(new LocalStrategy(
    { usernameField: 'email' },
    (email, password, done) => {
      console.log('Inside local strategy callback');
      User.findOne({ email }).then(user => {
        // User not found
        if (!user) {
          return done(null, false)
        }
// Check password
        bcrypt.compare(password, user.password).then(isMatch => {
          if (isMatch) {
            return done(null, user);
          }
        });
      });
    }
  ));

  // tell passport how to serialize the user
  passport.serializeUser((user, done) => {
    console.log('Inside serializeUser callback. User id is save to the session file store here');
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    console.log('Inside deserializeUser callback');
    console.log(`The user id passport saved in the session file store is: ${id}`);
    User.findOne({ _id: id }).then(user => {
      if (user && user.id == id) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  });

};