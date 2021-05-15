/*
//const express = require('express');
//const router  = express.Router();
const mongoose = require('mongoose')
//const express = require('express');
const { Router } = require('express');
const User = require('../models/user.model');
//const router = express.Router();
const router = new Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const salt = bcryptjs.genSaltSync(saltRounds);


//GET home page 
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/', (req, res, next) => {
  const { email, password } = req.body;
 
  if (email === '' || password === '') {
    res.render('/', {
      errorMessage: 'Please enter email and password to login.'
    });
    return;
  }
 
  User.findOne({ email })
    .then(user => {
      if (!user) {
        res.render('/', { errorMessage: 'Cannot find email' });
        return;
      } else if (bcryptjs.compareSync(hashedPassword, user.password)) {
        res.render('/user-profile', { user });
      } else {
        res.render('/', { errorMessage: 'Incorrect password.' });
      }
    })
    .catch(error => next(error));
});

module.exports = router;
*/
// Why is router not an object here, and is it express.Router() instead of require(Express)

