import React, { Component } from 'react';
import Stack from './Stack';
import './../sass/App.scss';
import { ModalRoute } from 'react-router-modal';
import Modal from './Modal';
import Profile from './Profile';
// import {Link}from 'react-router-dom';
import 'react-router-modal/css/react-router-modal.css';
import addbtn from "./../assets/plus.svg";
import useravatar from "./../assets/user.svg";
import { DragDropContext } from 'react-beautiful-dnd';
import { logoutUser } from '../api/user.js';
import { withRouter } from 'react-router-dom';
import { getDashboard } from '../api/dashboard';
import { throttle } from "throttle-debounce";

class App extends Component {
  constructor() {
    super();
    this.state = /*mockdata*/ {
      isFetching: true,
      dashboard: {
        backlog: {
          tasks: []
        },
        assigned: {
          tasks: [
            {
              _id: 4,
              title: "Task Title",
              category: "code"

            },
            {
              _id: 5,
              title: "Task Title",
              category: "code"
            },
            {
              _id: 6,
              title: "Task Title",
              category: "testing"
            }
          ]
        },
        inProgress: {
          tasks: [
            {
              _id: 7,
              title: "Task Title",
              category: "code"
            },
            {
              _id: 8,
              title: "Task Title",
              category: "resources"
            },
            {
              _id: 9,
              title: "Task Title",
              category: "testing"
            }
          ]
        },
        complete: {
          tasks: [
            {
              _id: 10,
              title: "Task Title",
              category: "resources"
            },
            {
              _id: 11,
              title: "Hello There",
              category: "research"
            },
            {
              _id: 12,
              title: "Task Title",
              category: "design"
            }
          ]
        }
      }
    }
  }
  componentDidMount = () => {
    this.props.history.listen((location) => {
      if (location.state && location.state.refresh) {
        this.fetchData();
      }
    });
    this.fetchData();
  };
  fetchData = () => {
    getDashboard(this.props.history).then((dashboard) => {
      // console.log("App: " + dashboard);
      console.log(dashboard);
      this.setState({ dashboard: dashboard, isFetching: false });
    });
  };
  newTask = () => {
    this.props.history.push('/dashboard/details/new')
  };

  logout = () => {
    logoutUser(this.props.history);
  };
  saveDashboard = throttle(5000, () => {
    console.log("Saving Dashboard");
    // Call the backend, pass it the current this.state.dashboard
  });
  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    // If it doesn't move, don't do anything.
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // Moving within the same stack
    if (source.droppableId === destination.droppableId) {

      let taskList = this.state.dashboard[source.droppableId].tasks;

      let selectedTasks = taskList.splice(source.index, 1);
      taskList.splice(destination.index, 0, selectedTasks[0]);

      this.setState({ dashboard: this.state.dashboard }, () => { this.saveDashboard(); });
    } else {
      // Moving to a different stack.
      let sourceList = this.state.dashboard[source.droppableId].tasks;
      let destinationList = this.state.dashboard[destination.droppableId].tasks;

      let selectedTasks = sourceList.splice(source.index, 1);
      destinationList.splice(destination.index, 0, selectedTasks[0]);

      this.setState({ dashboard: this.state.dashboard }, () => { this.saveDashboard(); });
    }
  };
  render() {
    return (
      <div>
        <div className="App" >
          <button onClick={this.logout}>Logout</button>
          <header className="boardHeader">
            <h1 className="boardHeader_title">Sprint Title</h1>
            <h3>Date Range</h3>
            <button id='headavatar'><img src={useravatar} alt="user menu"></img>
            </button>
          </header>
          <div className="filters">
            <div className="filters__wrapper">
              <button id="codebtn">Code</button>
              <button id="researchbtn">Research</button>
              <button id="designbtn">Design</button>
              <button id="resourcesbtn">Resources</button>
              <button id="testingbtn">Testing</button>
            </div>
          </div>
          <div className="stack_wrapper">
            <h3 className="stack_title">Backlog
              <button id="addcard" onClick={this.newTask}>
                <img id="addcardbtn" src={addbtn} alt="add new card"></img>
              </button>
            </h3>
            <h3 className="stack_title">Assigned</h3>
            <h3 className="stack_title">In-Progress</h3>
            <h3 className="stack_title">Completed</h3>
          </div>
          <DragDropContext onDragEnd={this.onDragEnd}>
            <div className="stacks">
              <Stack tasks={this.state.dashboard.backlog.tasks} id="backlog" />
              <Stack tasks={this.state.dashboard.assigned.tasks} id="assigned" />
              <Stack tasks={this.state.dashboard.inProgress.tasks} id="inProgress" />
              <Stack tasks={this.state.dashboard.complete.tasks} id="complete" />
            </div>
          </DragDropContext>
        </div>
        <ModalRoute
          component={Modal}
          path="/dashboard/details/:taskId"
          parentPath="/dashboard/"
        />
      </div>
    )
  }
}
export default withRouter(App);