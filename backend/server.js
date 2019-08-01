const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Dashboard = require('./schema/dashboard');
const Stack = require('./schema/stack');
const User = require('./schema/user');
const Task = require('./schema/task');
const Comment = require('./schema/comment');
const shortid = require('shortid');
const passport = require('passport');
const bcrypt = require("bcryptjs");

const users = require('./routes/api/users');
const dashboard = require('./routes/api/dashboard');
const task = require('./routes/api/task');
const authmiddleware = require('./authmiddleware');
const session = require('express-session');
const keys = require("./config/keys");
const uuid = require("uuid/v4");
const FileStore = require('session-file-store')(session);
const LocalStrategy = require('passport-local').Strategy;


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

app.use(session({
  genid: (req) => {
    return uuid();
  },
  store: new FileStore(),
  secret: keys.secretOrKey,
  resave: false,
  saveUninitialized: true
}));
require("./config/passport")(passport);
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
// Passport config

// Add in all of our other Routes
app.use("/api/users", users);
app.use('/api/dashboard', dashboard);
app.use('/api/task', task);

// append /api for our http requests
app.use('/', router);

router.get('/', ()=> {

});

// -------------- Initialize When Empty -------------------------------------------------------------------------

function initData() {
  console.log("No Data Found, initializing with Mock Data");

  const fs = require('fs');

  async function parseComment(comment) {
    comment.postedBy = await parseUser(comment.postedBy);
    return await new Comment(comment).save();
  }

  async function parseTask(task) {
    var origAssignee = task.assignee;
    task.assignee = await parseUser(task.assignee);
    // for some reason the first time doesn't do it?
    task.assignee = await parseUser(origAssignee);
    for(var j = 0; j < task.comments.length; j++) {
      var comment = task.comments[j];
      task.comments[j] = await parseComment(comment);
    }

    return await new Task(task).save();
  }
  async function parseStack(stack) {
    for(var i = 0; i < stack.tasks.length; i++) {
      var task = stack.tasks[i];
      stack.tasks[i] = await parseTask(task);
    }
    return await new Stack(stack).save();
  }

  async function parseUser(user) {
    return await User.findOne({ email: user.email }).then(async (dbuser) => {
      if (dbuser) {
        return dbuser;
      } else {
        const newUser = new User(user);
        return await bcrypt.genSalt(10, async (err, salt) => {
          return await bcrypt.hash(newUser.password, salt, async (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            return await newUser
              .save((err, dbUser) => {
                return dbUser;
              })
          });
        });
      }
    });
  }
  
  fs.readFile('./mockData.json', 'utf8', async function(err,data) {
    if (err) {
      return ;
    }
    var dataFromFile=JSON.parse(data);

    dataFromFile.dashboard.backlog = await parseStack(dataFromFile.dashboard.backlog);
    dataFromFile.dashboard.assigned = await parseStack(dataFromFile.dashboard.assigned);

    dataFromFile.dashboard.inProgress = await parseStack(dataFromFile.dashboard.inProgress);
    dataFromFile.dashboard.complete = await parseStack(dataFromFile.dashboard.complete);

    var dash = await new Dashboard(dataFromFile.dashboard).save();

    console.log("Initialized with Mock Data.");
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


// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));