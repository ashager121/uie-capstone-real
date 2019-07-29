// const Task = require("../../schema/Task");

const express = require("express");
const router = express.Router();

//
// // @route GET api/dashboard/
// // @desc Gets main dashboard
// // @access Private
// router.get('/:taskId', (req, res) => {
//   Task.findById(req.params.taskId)
//     .populate('comments')
//     .exec((err, data) => {
//       if (err) return res.json({ success: false, error: err });
//       return res.json({ success: true, data: data });
//     });
// });
//
// // this is our update method
// // this method overwrites existing data in our database
// router.post('/:taskId', (req, res) => {
//   const taskData = req.body;
//   Data.findByIdAndUpdate(req.params.taskId, task, (err) => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true });
//   });
// });
//
// // this is our delete method
// // this method removes existing data in our database
// router.delete('/:taskId', (req, res) => {
//   Data.findByIdAndRemove(req.params.taskId, (err) => {
//     if (err) return res.send(err);
//     return res.json({ success: true });
//   });
// });
//
// // this is our create methid
// // this method adds new data in our database
// router.post('/new', (req, res) => {
//   const { task } = req.body;
//
//   let newTask = new Task(task);
//   newTask.save((err) => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true });
//   });
// });


module.exports = router;
