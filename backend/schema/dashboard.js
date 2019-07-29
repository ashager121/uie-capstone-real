// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shortid = require('shortid');

// this will be our data base's data structure
const DashboardSchema = new Schema(
  {
    _id: {
      type: String,
      default: shortid.generate
    },
    name: String,
    startDate: Date,
    endDate: Date,
    backlog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Stack'
    },
    assigned: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Stack'
    },
    inProgress: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Stack'
    },
    complete: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Stack'
    }
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Dashboard", DashboardSchema);