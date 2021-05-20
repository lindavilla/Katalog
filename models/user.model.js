const mongoose = require('mongoose');
const { Schema, model } = mongoose;
 
const userSchema = new Schema(
    {
      name: {
        type: String,
        trim: true,
        required: [true, 'name is required.'],
        unique: true
      },
      email: {
        type: String,
        required: [true, 'Email is required.'],
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
        unique: true,
        lowercase: true,
        trim: true
      },
      password: {
        type: String,
        required: [true, 'Password is required.']
      },
      posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
    },
      {
      timestamps: true
      }
    );
   
  module.exports = model('User', userSchema);
  
 
/*const posts = [
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
  ];*/

   /*Post.create(posts)
  .then(postsFromDB => {
    console.log(`Created ${postsFromDB.length} posts`);
 */