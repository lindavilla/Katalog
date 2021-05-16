const mongoose = require('mongoose')
const { Router } = require('express');
const Post = require('../models/post.model');
const router = new Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const salt = bcryptjs.genSaltSync(saltRounds);

//RENDER CREATE A POST PAGE
router.get('/userProfile/create', (req, res) => res.render('create-post')); 

//CREATE NEW POST
router.post('/create', (req, res) => {
  //console.log(req.body);
  const { title, date, description, keywords, theme, creator } = req.body;

  Post.create({ title, date, description, keywords, theme, creator })
    //.then(bookFromDB => console.log(`New book created: ${bookFromDB.title}.`))
    .then(() => res.redirect('/userProfile'))
    .catch(error => console.log(`Error while creating a new book:`, error));
});

//READ(LIST) POSTS ON USERPROFILE PAGE
router.get('/userProfile', (req, res, next) => {
    Post.find()
      .then(allThePostsFromDB => {
        res.render('user-profile', { posts: allThePostsFromDB });
      })
      .catch(error => {
        console.log('Error while getting the posts from the DB: ', error);
   
        next(error);
      });
  });

module.exports = router;

