const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require('passport');


// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const validateProfileInput = require("../../validation/profile");
// Load User model
const User = require("../../schema/user");


// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
// Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        imageUrl: req.body.imageUrl
      });
// Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});



// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res, next) => {
  // Form validation
  console.log('Loggin in...');
  const { errors, isValid } = validateLoginInput(req.body);
// Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  passport.authenticate('local', (err, user, info)=> {
    req.login(user, (err) => {
      var uiUser = {
        name: user.name,
        email: user.email,
        imageUrl: user.imageUrl
      };
      return res.json({
        success: true,
        user: uiUser
      });
    });
  })(req, res, next);
});

router.get('/logout', function(req, res){
  req.logout();
  return res.json({ redirect: true});
});

// @route GET api/users/profile/:userId
// @desc Gets main dashboard
// @access Private
router.get('/profile', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.json({ success: false, redirect: true});
  }

  User.findById(req.user._id)
    .select('_id name email imageUrl')
    .exec((err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
});

// @route GET api/users/profile/:userId
// @desc Gets main dashboard
// @access Private
router.get('/profile/:userId', (req, res) => {

  if (!req.isAuthenticated()) {
    return res.json({ success: false, redirect: true});
  }

  if (req.params.userId == 'all') {
    User.find({})
      .select('_id name email imageUrl')
      .exec((err, users) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: users });
      })
  } else {
    User.findById(req.params.userId)
      .select('_id name email imageUrl')
      .exec((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
      });  
  }
});

// this is our update method
// this method overwrites existing data in our database
router.post('/profile/:userId', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.json({ success: false, redirect: true});
  }
  // Form validation
  const { errors, isValid } = validateProfileInput(req.body);
// Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const data = req.body;

  User.findById(req.params.userId).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ invalid: "Invalid Username/Password" });
    }
    user.email = data.email;
    user.name = data.name;
    user.imageUrl = data.imageUrl;

    if (data.password) {
      // Check password
      bcrypt.compare(data.oldPassword, user.password).then(isMatch => {
        if (isMatch) {
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(data.password, salt, (err, hash) => {
              if (err) throw err;
              user.password = hash;
              user
                .save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
            });
          });
        } else {
          return res
            .status(400)
            .json({invalid: "Invalid Username/Password"});
        }
      });
    } else {
      user
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
    }
  });
});

module.exports = router;
