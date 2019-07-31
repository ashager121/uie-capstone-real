const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Task = mongoose.model('Task');
const User = mongoose.model('User');
const Comment = mongoose.model('Comment');

const validateTask = require("../../validation/task");


// @route GET api/dashboard/
// @desc Gets main dashboard
// @access Private
router.get('/:taskId', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.json({ success: false, redirect: true});
  }

  Task.findById(req.params.taskId)
    .populate([{
      path:'assignees',
      select: ['name', 'email', 'imageUrl']
    }, {
      path: 'comments',
      select: ['_id', 'text'],
      populate: {
        path: 'postedBy',
        select: ['name', 'email', 'imageUrl']
      }}])
    .exec((err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
});

// this is our update method
// this method overwrites existing data in our database
router.post('/:taskId', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.json({ success: false, redirect: true});
  }

  const updatedTask = req.body;
  const { errors, isValid } = validateTask(updatedTask);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  // First grab all users for the assignees
  User.find({})
    .select('_id name email imageUrl')
    .exec((err, users) => {
      var userMap = {};
      for (let user of users) {
        userMap[user._id] = user;
      }

      if (!updatedTask.comments) {
        updatedTask.comments = [];
      }
      if (!updatedTask.assignees) {
        updatedTask.assignees = [];
      }
      for (let i=0; i < updatedTask.assignees.length; i++) {
        updatedTask.assignees[i] = userMap[updatedTask.assignees[i]._id];
      }

      if (req.params.taskId == 'new') {
        let newTask = new Task(req.body);
        newTask.save((err, data) => {
          if (err) return res.json({ success: false, error: err });
          return res.json({ success: true, data: data });
        });
      } else {
        Task.findById(req.params.taskId)
          .populate([{
            path:'assignees',
            select: ['name', 'email', 'imageUrl']
          }, {
            path: 'comments',
            select: ['_id', 'text'],
            populate: {
              path: 'postedBy',
              select: ['name', 'email', 'imageUrl']
            }}])
          .exec((err, dbtask) => {
            if (err) return res.json({ success: false, error: err });
            dbtask.title = updatedTask.title;
            dbtask.dueDate = updatedTask.dueDate;
            dbtask.priority = updatedTask.priority;
            dbtask.category = updatedTask.category;
            dbtask.description = updatedTask.description;
            dbtask.assignees = updatedTask.assignees;
            dbtask.save((err) => {
              if (err) return res.json({ success: false, error: err });
              return res.json({ success: true, data: dbtask });
            });
          });
      }

    });
});

// this is our update method
// this method overwrites existing data in our database
router.post('/:taskId/comment', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.json({ success: false, redirect: true});
  }

  const commentText = req.body.comment;


  Task.findById(req.params.taskId)
    .populate([{
      path:'assignees',
      select: ['name', 'email', 'imageUrl']
    }, {
      path: 'comments',
      select: ['_id', 'text'],
      populate: {
        path: 'postedBy',
        select: ['name', 'email', 'imageUrl']
      }}])
    .exec((err, dbTask) => {
      if (err) return res.json({ success: false, error: err });

      let newComment = new Comment({
        text: commentText,
        postedBy: req.user
      });

      newComment.save((err, data) => {
        if (err) return res.json({ success: false, error: err });

        dbTask.comments.push(data);

        dbTask.save((err) => {
          if (err) return res.json({ success: false, error: err });
          return res.json({ success: true, data: dbTask });
        });
      });
    });
});

// this is our delete method
// this method removes existing data in our database
router.delete('/:taskId', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.json({ success: false, redirect: true});
  }

  Task.findByIdAndRemove(req.params.taskId, (err) => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});




module.exports = router;
