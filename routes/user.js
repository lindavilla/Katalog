const mongoose = require('mongoose')
const { Router } = require('express');
const User = require('../models/user.model');
const router = new Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const salt = bcryptjs.genSaltSync(saltRounds);


router.get('/userProfile', (req, res) => {
  console.log(req.session.currentUser);
  if( ! req.session.currentUser) console.log("Error, there is no user in session");
  else
    User.findById(req.session.currentUser._id)
      .populate('posts')
      .then(dbUser => {
        res.render('user-profile', { user: dbUser });
      })
      .catch(error => {
        console.log('Error while getting the posts from the DB: ', error);
      next(error);
        });
});
  
  
//GET of Update user
router.get('/userProfile/edit', (req, res) => {
  const userId = req.session.currentUser;
  User.findById(userId)
  .then(userToEdit => {
    // console.log(userToEdit);
  res.render('user-edit', {user: userToEdit});
  })
  .catch(error => next(error));
})
  

//POST of update user
router.post('/userProfile/edit', (req, res) => {
  const userId = req.session.currentUser._id;
  const { name, email, password } = req.body;
 
  User.findByIdAndUpdate(userId, { name, email, password }, { new: true })
    .then(updatedUser => res.redirect('/userProfile', {updatedUser: req.session.currentUser._id}))
    .catch(error => next(error));
});

//Delete User
router.post('/userProfile/:id/delete', (req, res) => {
  const userId = req.session.currentUser; 
  User.findByIdAndDelete(userId)
    .then(() => res.redirect('/'))
    .catch(error => next(error));
});

module.exports = router;
  