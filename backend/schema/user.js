// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shortid = require('shortid');

// this will be our data base's data structure
const UserSchema = new Schema(
  {
    _id: {
      type: String,
      default: shortid.generate
    },
    name: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true
    },
    password: {
      type: String,
      require: true
    },
    imageUrl: {
      type: String,
      require: true
    }
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("User", UserSchema);