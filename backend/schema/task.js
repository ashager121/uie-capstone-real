// /backend/data.js
const mongoose = require("mongoose");
const shortid = require('shortid');

const Schema = mongoose.Schema;

// this will be our data base's data structure
const TaskSchema = new Schema(
  {
    _id: {
      type: String,
      default: shortid.generate
    },
    title: String,
    dueDate: Date,
    priority: String,
    category: String,
    description: String,
    assignees: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    comments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }]
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Task", TaskSchema);