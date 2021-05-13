const express = require('express');
const Celebrity = require('../models/user.routes.js');
const router  = express.Router();

router.get('/sign-up', (req, res) => res.render('sign-up'));

router.post('/sign-up', (req, res) => {
  const { name, email, hashPassword } = req.body;

  User.create({ name, email, hashPassword })
    .then(() => res.redirect('/'))
    .catch(error => console.log(`Error while creating a new user:`, error));
});