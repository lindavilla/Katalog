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
    }
  );
  
  
  router.get('/users/edit', (req, res) => {
    const userId = req.session.currentUser;
    // Llamar a la DB 
    // Buscar por ID
  
    res.render('user-edit', )
  })
  
  module.exports = router;
  