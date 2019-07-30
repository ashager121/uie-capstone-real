const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Task = mongoose.model('Task');

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
      select: ['text'],
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

  const taskData = req.body;
  Task.findByIdAndUpdate(req.params.taskId, task, (err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
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

// this is our create methid
// this method adds new data in our database
router.post('/new', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.json({ success: false, redirect: true});
  }

  let newTask = new Task(req.body.task);
  newTask.save((err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});


module.exports = router;
