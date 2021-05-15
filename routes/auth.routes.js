const mongoose = require('mongoose')
const { Router } = require('express');
const User = require('../models/user.model');
const router = new Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const salt = bcryptjs.genSaltSync(saltRounds);




/* ----------------------- GET SIGN UP -------------------------------*/



router.get('/sign-up', (req, res,) => 
  res.render('sign-up'));


/* -----------------------POST SIGN UP -------------------------------*/


router.post('/sign-up', (req, res, next) => {
  console.log('The form data: ', req.body)
  const {name, email, password} = req.body;
  
  if (!name || !email || !password) {
    res.render('sign-up', { errorMessage: 'All fields are mandatory. Please provide your username, email and password.' });
    return;
  }

  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!regex.test(password)) {
    res
      .status(500)
      .render('sign-up', { errorMessage: 'Password needs to have at least 6 characters and must contain at least one number, one lowercase and one uppercase letter.' });
    return;
  }

  const hashedPassword = bcryptjs.hashSync(password, salt);
  console.log(`Password hash: ${hashedPassword}`);
  
  bcryptjs
    .genSalt(saltRounds)
    .then(salt => bcryptjs.hash(password, salt))
    .then(hashedPassword => {
      return User.create({
        name, email, password: hashedPassword
      })
    })
    .then(userFromDB => {
      console.log('Newly created user is: ', userFromDB);
      res.redirect('/userProfile');
  })
  .catch(error => {
  
    if (error instanceof mongoose.Error.ValidationError) {
      res.status(500).render('sign-up', { errorMessage: error.message });
    } else if (error.code === 11000) {
      res.status(500).render('sign-up', {
         errorMessage: 'Username and email need to be unique. Either username or email is already used.'
      });
    } else {
      next(error);
    }
  }); 
});

/* ------------------------ GET Log In ------------------------- */



router.get('/', (req, res, next) => {
  res.render('index');
});


/* ------------------------ POST Log In ------------------------- */


router.post('/', (req, res, next) => {
  //console.log('SESSION =====> ', req.session);
  const { email, password } = req.body;
  if (email === '' || password === '') {
    res.render('/', {
      errorMessage: 'Please enter email and password to login.'
    });
    return;
  }
  const hashedPassword = bcryptjs.hashSync(password, salt);
  User.findOne({ email })
    .then(user => {
      if (!user) {
        res.render('/', { errorMessage: 'Cannot find email' });
        return;
      } else if (bcryptjs.compareSync(password, hashedPassword)) {
        req.session.currentUser = user;
        console.log(req.session.currentUser);
        // res.render('user-profile', { user });
        res.redirect('/userProfile');
      } else {
        res.render('/', { errorMessage: 'Incorrect password.' });
      }
    })
    .catch(error => next(error));
});

/* ------------------------ POST Log Out ------------------------- */

router.post('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});



module.exports = router;
