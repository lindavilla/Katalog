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
        unique: true,
        lowercase: true,
        trim: true
      },
      passwordHash: {
        type: String,
        required: [true, 'Password is required.']
      }
    },
    {
      timestamps: true
    }
  );
   
  module.exports = model('User', userSchema);
  
 
module.exports = model('User', userSchema);