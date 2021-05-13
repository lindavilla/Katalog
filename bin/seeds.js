const mongoose = require('mongoose');
const { getMaxListeners } = require('../models/user.model.js');
const User = require("../models/user.model.js"); 
const DB_NAME = 'Katalog-project';
 
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const posts = [
    {
        userId: {type: Schema.Types.ObjectId, ref: 'User'},
        title: "Cool Art",
        created: {
          type: Date,
          default: Date.now
        },
        description: "Nice Art",
        keywords: ["art","new","street"],
        theme: "contemporary",
        creator: "B-ri",
      }
  ];

  const users = [
        {   name: "Brian",
            email: "coolBrian@gmail.com",
            bio: "hey guys",
            hashPassword: "supersecret",
        },
        {   name: "Brian",
            email: "coolBrian@gmail.com",
            bio: "hey guys",
            hashPassword: "supersecret",
    },
  ]

  
 User.create(users)
  .then(userFromDB => {
    console.log(`Created ${userFromDB.length} users`);

  Post.create(posts)
  .then(postsFromDB => {
    console.log(`Created ${postsFromDB.length} posts`);
 
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating post from the DB: ${err}`));

