const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Dashboard = require('./schema/dashboard');
const Stack = require('./schema/stack');
const User = require('./schema/user');
const Task = require('./schema/task');
const shortid = require('shortid');
const passport = require('passport');

const users = require('./routes/api/users');
const dashboard = require('./routes/api/dashboard');
const task = require('./routes/api/task');

const API_PORT = 3001;

// -------------- Setup -------------------------------------------------------------------------

const app = express();
app.use(cors());
const router = express.Router();

// this is our MongoDB database
const dbRoute = require("./config/keys").mongoURI;
  

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);


// Add in all of our other Routes
app.use("/api/users", users);
app.use('/api/dashboard', dashboard);
app.use('/api/task', task);

// -------------- Initialize When Empty -------------------------------------------------------------------------

function initData() {
  console.log("No Data Found, initializing with Mock Data");

  const fs = require('fs');

  async function parseTask(task) {
    return await new Task(task).save();
  }
  async function parseStack(stack) {
    for(var i = 0; i < stack.tasks.length; i++) {
      var task = stack.tasks[i];
      stack.tasks[i] = await parseTask(task);
    }
    return await new Stack(stack).save();
  }
  
  fs.readFile('./mockData.json', 'utf8', async function(err,data) {
    if (err) {
      return ;
    }
    var dataFromFile=JSON.parse(data);

    for (var user of dataFromFile.users) {
      User.create(user, ()=>{});
    }

    dataFromFile.dashboard.backlog = await parseStack(dataFromFile.dashboard.backlog);
    dataFromFile.dashboard.assigned = await parseStack(dataFromFile.dashboard.assigned);

    dataFromFile.dashboard.inProgress = await parseStack(dataFromFile.dashboard.inProgress);
    dataFromFile.dashboard.complete = await parseStack(dataFromFile.dashboard.complete);

    var dash = await new Dashboard(dataFromFile.dashboard).save();

    console.log("Initialized with Mock Data.")
  });
}

Dashboard.find((err, data) => {
  console.log(data);
  if (!data || data.length == 0) {
    initData();
  }
});



// -------------- Endpoints --------------------------------------------------------------------

// this is our get method
// this method fetches all available data in our database




// -------------- Finishing Setup--------------------------------------------------------------------

// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));