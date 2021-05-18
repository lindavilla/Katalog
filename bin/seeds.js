const mongoose = require('mongoose');
const { getMaxListeners } = require('../models/user.model.js');
const User = require("../models/user.model.js");
const Post = require("../models/post.model.js"); 
const DB_NAME = 'katalog';
 
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

/*const users = [
        {   name: "eleanor",
            email: "ele@al.com",
            bio: "f",
            password: "No!1dfghuyt",
        },
        
        {   name: "hey",
            email: "cool@gmail.com",
            bio: "hey guys again",
            password: "hello",
    },
  ]

  
 User.create(users)
  .then(userFromDB => {
    console.log(`Created ${userFromDB.length} users`);

 
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating user from the DB: ${err}`));
  */

  const posts = [
    {   userId: "60a40bff9d494aee78e03155",
        title: "The Mona Lisa",
        description: "Chick that sorta smiles but not really.",
        theme: "painting",
        creator: "Leonardo da Vinci",
    },
    {   userId: "60a40bff9d494aee78e03155",
        title: "David",
        description: "Big naked dude statue.",
        theme: "sculpture",
        creator: "Michelangelo",
    },
]


Post.create(posts)
.then(postFromDB => {
console.log(`Created ${postFromDB.length} posts`);


mongoose.connection.close();
})
.catch(err => console.log(`An error occurred while creating post from the DB: ${err}`));

