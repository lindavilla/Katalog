const mongoose = require('mongoose');
const { Schema, model } = mongoose;
 
const userSchema = new Schema(
  {
    name: String,
    email: String,
    bio: String,
    hashPassword: String,
  }
);
 
module.exports = model('User', userSchema);