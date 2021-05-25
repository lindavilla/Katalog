const mongoose = require('mongoose')
const { Router } = require('express');
const Post = require('../models/post.model');
const User = require('../models/user.model');
const router = new Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const salt = bcryptjs.genSaltSync(saltRounds);
const fileUploader = require('../configs/cloudinary.config');

//RENDER CREATE A POST PAGE
router.get('/userProfile/create', (req, res) => res.render('create-post')); 

//CREATE NEW POST
router.post('/userProfile/create', fileUploader.single('image'), (req, res) => {
  const { title, date, description, keywords, theme, creator } = req.body;
  const userId = req.session.currentUser._id;
  const file = req.file.path;
  Post.create({ userId, title, date, description, keywords, theme, creator, imageUrl: file })
  .then(dbPost => {
    return User.findByIdAndUpdate(userId, { $push: { posts: dbPost._id } });
  })
    .then(() => res.redirect('/userProfile'))
    .catch(error => console.log(`Error while creating a new post:`, error));
});


  //GET update post
  router.get('/userProfile/:id/edit', (req, res, next) => {
    // const postId = req.session.currentUser.posts[0]._id;
    const postId = req.params.id;
    Post.findById(postId)
    .then(postToEdit => {
      console.log(postToEdit);
      return res.render('edit-post', { post: postToEdit });
    })
    .catch(error => next(error));
  })

  //POST update post
  router.post('/userProfile/:id/edit', (req, res, next) => {
    // const postId = req.session.currentUser.posts._id;
    const postId = req.params.id;
    const { title, description, theme } = req.body;
   
    Post.findByIdAndUpdate(postId, { title, description, theme }, { new: true })
      .then(() => res.redirect('/userProfile'))
      .catch(error => next(error));
  });

  //Delete post

module.exports = router;

