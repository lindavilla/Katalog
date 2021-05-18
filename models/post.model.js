const mongoose = require('mongoose');
const { Schema, model } = mongoose;
 
const postSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId, ref: 'User'
    },
    title: {
      type: String,
      trim: true,
      required: [true, 'title is required']
    }, 
    date: {
      type: Date,
      default: Date.now()
    },
    description: {
      type: String,
      trim: true,
      required: [true, 'description is required']
    },
    keywords: {
      type: [String]
    },
    theme: {
      type: String,
      required: [true, 'theme is required']

    },
    creator: {
      type: String,
      trim: true
    }
  });
 
module.exports = model('Post', postSchema);