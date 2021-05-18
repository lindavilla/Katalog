const mongoose = require('mongoose')
const { Router } = require('express');
const User = require('../models/user.model');
const router = new Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const salt = bcryptjs.genSaltSync(saltRounds);


router.get('/userProfile', (req, res) => {
    const user = req.session.currentUser;
    const posts = user.posts;
    const data = {posts};
    res.render('user-profile', {data})
    }
  );
  
  /*router.get('/userProfile', (req, res, next) => {
    Post.find()
    .populate('userId')
    .then(dbPosts => {
      res.render('user-profile', { posts: dbPosts });
    })
    .catch(error => {
      console.log('Error while getting the posts from the DB: ', error);
    next(error);
      });
  });*/
  
  router.get('/users/:id/edit', (req, res) => {
    const userId = req.session.currentUser;
    User.findById(userId)
    .then()
  
    res.render('user-edit', {data})
  })
  

//POST of update

  module.exports = router;
  