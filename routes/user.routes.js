//const express = require('express');
const { Router } = require('express');
const User = require('../models/user.model');
//const router = express.Router();
const router = new Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const salt = bcryptjs.genSaltSync(saltRounds);



router.get('/sign-up', (req, res,) => 
  res.render('sign-up'));


/* -----------------------POST SIGN UP -------------------------------*/


router.post('/sign-up', (req, res, next) => {
  console.log('The form data: ', req.body)
  const {name, email, passwordHash} = req.body;
  
  const hashedPassword = bcryptjs.hashSync(passwordHash, salt);
  console.log(`Password hash: ${hashedPassword}`);
  
  bcryptjs
    .genSalt(saltRounds)
    .then(salt => bcryptjs.hash(passwordHash, salt))
    .then(hashedPassword => {

      return User.create({
        name, email, passwordHash: hashedPassword
      })
    })
    .then(userFromDB => {
      console.log('Newly created user is: ', userFromDB);
    })
    .catch(error => next(error))
    .then(userFromDB => {
      console.log('Newly created user is: ', userFromDB);
      res.redirect('/userProfile');
  })
});

router.get('/userProfile', (req, res) => res.render('user-profile'));



module.exports = router;



/*const {name,email,passwordHash} = req.body;
User.create({name,email,passwordHash})
.then(() => res.redirect('/'))

   const {name, email, passwordHash} = req.body;
    console.log('The form data: ', {name, email, passwordHash});
  
    bcryptjs
    .genSalt(saltRounds)
    .then(salt => bcryptjs.hash(passwordHash, salt))
    .then(hashedPassword => {
      return User.create({ 
        name,
        email,
        passwordHash: hashedPassword
      });
    })
    .then(userFromDB => {
      console.log('Newly created user is: ', userFromDB);
      res.redirect('/');
    })
    .catch(error => next(error));
  });

//router.get('/userProfile', (req, res) => res.render('users/user-profile'));
*/