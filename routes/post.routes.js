const mongoose = require('mongoose')
const { Router } = require('express');
const Post = require('../models/post.model');
const User = require('../models/user.model');
const router = new Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const salt = bcryptjs.genSaltSync(saltRounds);

//RENDER CREATE A POST PAGE
router.get('/userProfile/create', (req, res) => res.render('create-post')); 

//CREATE NEW POST
router.post('/userProfile/create', (req, res) => {
  //console.log(req.body);
  const { title, date, description, keywords, theme, creator } = req.body;
  const userId = req.session.currentUser._id;
  console.log(req.session.currentUser);
  Post.create({ userId, title, date, description, keywords, theme, creator })
  .then(dbPost => {
    return User.findByIdAndUpdate(userId, { $push: { posts: dbPost._id } });
  })
    .then(() => res.redirect('/userProfile'))
    .catch(error => console.log(`Error while creating a new post:`, error));
});

//SHOW POSTS ON USERPROFILE PAGE
router.get('/userProfile', (req, res, next) => {

  /*
    User.find()
    .populate('posts')
    .then(dbPosts => {
      res.render('user-profile', { posts: dbPosts });
    })
    .catch(error => {
      console.log('Error while getting the posts from the DB: ', error);
    next(error);
      });
    */});

  //GET update post
  router.get('/userProfile/:id/edit', (req, res) => {
    const postId = req.session.currentUser.posts._id;
    Post.findById(postId)
    .then(postToEdit => {
      // console.log(postToEdit);
    res.render('edit-post', {post: postToEdit});
    })
    .catch(error => next(error));
  })

  //POST update post

  //Delete post

module.exports = router;

