// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shortid = require('shortid');

// this will be our data base's data structure
const StackSchema = new Schema(
  {
    _id: {
      type: String,
      default: shortid.generate
    },
    name: String,
    tasks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
      }
    ]
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Stack", StackSchema);