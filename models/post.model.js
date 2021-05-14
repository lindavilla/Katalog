const mongoose = require('mongoose');
const { Schema, model } = mongoose;
 
const postSchema = new Schema(
  {
    //userId: {type: Schema.Types.ObjectId, ref: 'User'},
    title: String,
    created: 
    {
      type: Date,
      default: Date.now
    },
    description: String,
    keywords: [String],
    theme: String,
    creator: String,
  });
 
module.exports = model('Post', postSchema);