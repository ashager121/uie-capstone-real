// /backend/data.js
const mongoose = require("mongoose");
const shortid = require('shortid');

const Schema = mongoose.Schema;

// this will be our data base's data structure
const CommentSchema = new Schema(
  {
    _id: {
      type: String,
      default: shortid.generate
    },
    text: String,
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Comment", CommentSchema);