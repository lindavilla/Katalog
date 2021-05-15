const mongoose = require('mongoose');
const { getMaxListeners } = require('../models/user.model.js');
const User = require("../models/user.model.js"); 
const DB_NAME = 'katalog';
 
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

  const users = [
        {   name: "Bri",
            email: "coolBrian@gmail.com",
            bio: "hey guys",
            password: "supersecret",
        },
        {   name: "Brian",
            email: "cool@gmail.com",
            bio: "hey guys",
            password: "hello",
    },
  ]

  
 User.create(users)
  .then(userFromDB => {
    console.log(`Created ${userFromDB.length} users`);

 
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating post from the DB: ${err}`));

