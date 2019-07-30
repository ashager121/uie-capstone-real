const Dashboard = require("../../schema/dashboard");

const express = require("express");
const router = express.Router();


// @route GET api/dashboard/
// @desc Gets main dashboard
// @access Private
router.get('/', (req, res) => {
  if (!req.isAuthenticated()) {
    console.log("Not authenticated, redirecting...");
    return res.json({ success: false, redirect: true});
  }

  var populateQuery = [];
  var taskSelector = {
    select: ['name'],
    populate: {
      path: 'tasks',
      select: ['title', 'dueDate', 'priority', 'category'],
      populate: {
        path: 'assignees',
        select: ['name', 'imageUrl', 'email']
      }
    }
  };
  populateQuery.push({ path: 'backlog', ...taskSelector});
  populateQuery.push({ path: 'assigned', ...taskSelector});
  populateQuery.push({ path: 'inProgress', ...taskSelector});
  populateQuery.push({ path: 'complete', ...taskSelector});

  Dashboard.findOne({name:"Sprint 1"})
    .populate(populateQuery)
    .exec((err, data) => {
      if (err) return res.json({ success: false, error: err });
      console.log(data);
      return res.json({ success: true, data: data });
    });
});

// this is our update method
// this method overwrites existing data in our database
router.post('/update', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.json({ success: false, redirect: true});
  }

  const newDashboard = req.body;
  console.log("new: " + JSON.stringify(newDashboard));

  var populateQuery = [];
  var taskSelector = {
    select: ['name'],
    populate: {
      path: 'tasks'
    }
  };
  populateQuery.push({ path: 'backlog', ...taskSelector});
  populateQuery.push({ path: 'assigned', ...taskSelector});
  populateQuery.push({ path: 'inProgress', ...taskSelector});
  populateQuery.push({ path: 'complete', ...taskSelector});

  Dashboard.findOne({name:"Sprint 1"})
    .populate(populateQuery)
    .exec((err, dashboard) => {
      var taskMap = {};
      for (let backlogTask of dashboard.backlog.tasks) {
        taskMap[backlogTask._id] = backlogTask;
      }
      for (let assignedTask of dashboard.assigned.tasks) {
        taskMap[assignedTask._id] = assignedTask;
      }
      for (let inProgressTask of dashboard.inProgress.tasks) {
        taskMap[inProgressTask._id] = inProgressTask;
      }
      for (let completeTask of dashboard.complete.tasks) {
        taskMap[completeTask._id] = completeTask;
      }
      console.log("map: " + JSON.stringify(taskMap));
      dashboard.backlog.tasks = [];
      dashboard.assigned.tasks = [];
      dashboard.inProgress.tasks = [];
      dashboard.complete.tasks = [];
      console.log("updated: " + JSON.stringify(dashboard));

      for (let backlogTask of newDashboard.backlog.tasks) {
        dashboard.backlog.tasks.push(taskMap[backlogTask._id]);
      }
      for (let assignedTask of newDashboard.assigned.tasks) {
        dashboard.assigned.tasks.push(taskMap[assignedTask._id]);
      }
      for (let inProgressTask of newDashboard.inProgress.tasks) {
        dashboard.inProgress.tasks.push(taskMap[inProgressTask._id]);
      }
      for (let completeTask of newDashboard.complete.tasks) {
        dashboard.complete.tasks.push(taskMap[completeTask._id]);
      }
      console.log("updated done: " + JSON.stringify(dashboard));

      Promise.all([
        dashboard.backlog.save((err)=>{
          if (err) return err
        }),
        dashboard.assigned.save((err)=>{
          if (err) return err
        }),
        dashboard.inProgress.save((err)=>{
          if (err) return err
        }),
        dashboard.complete.save((err)=>{
          if (err) return err
        })
      ]).then((err)=>{
        if (err && (err[0] || err[1] || err[2] || err[3])) return res.json({ success: false, error: err });
        return res.json({ success: true, data: dashboard });
      });
    });
});

module.exports = router;
