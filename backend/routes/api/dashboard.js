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

module.exports = router;
