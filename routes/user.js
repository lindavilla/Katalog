const mongoose = require('mongoose')
const { Router } = require('express');
const User = require('../models/user.model');
const router = new Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const salt = bcryptjs.genSaltSync(saltRounds);


router.get('/userProfile', (req, res) => {
  console.log(req.session.currentUser);
  res.render('user-profile', {user: req.session.currentUser})
});
  
  
//GET of Update user
router.get('/usersProfile/:id/edit', (req, res) => {
  const userId = req.session.currentUser;
  User.findById(userId)
  .then(userToEdit => {
    // console.log(userToEdit);
  res.render('user-edit', {user: userToEdit});
  })
  .catch(error => next(error));
})
  

//POST of update user
router.post('/userProfile/:id/edit', (req, res) => {
  const userId = req.session.currentUser;
  const { name, email, password } = req.body;
 
  User.findByIdAndUpdate(userId, { name, email, password }, { new: true })
    .then(updatedUser => res.redirect(`/userProfile`, {updatedUser: req.session.currentUser}))
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
  