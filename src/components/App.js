import React, { Component } from 'react';
import Stack from './Stack';
import './../sass/App.scss';
import { ModalRoute } from 'react-router-modal';
import Modal from './Modal';
// import {Link}from 'react-router-dom';
import 'react-router-modal/css/react-router-modal.css';
import addbtn from "./../assets/plus.svg";
import useravatar from "./../assets/user.svg";
import { DragDropContext } from 'react-beautiful-dnd';

import {logoutUser} from '../api/user.js'
import {withRouter} from 'react-router-dom'
import {getDashboard} from '../api/dashboard';

class App extends Component {
  constructor() {
    super()
    this.state = /*mockdata*/ {
      isFetching: true,
      dashboard: {
        backlog: {
          tasks: [
            {
              _id: 1,
              title: "Task Title",
              category: "code"
            },
            {
              _id: 2,
              title: "Task Title",
              category: "testing"
            },
            {
              _id: 3,
              title: "Task Title",
              category: "code"
            }
          ]
        },
        assigned: {
          tasks: [
            {
              title: "Task Title",
              category: "code"
            },
            {
              title: "Task Title",
              category: "code"
            },
            {
              title: "Task Title",
              category: "testing"
            }
          ]
        },
        inProgress: {
          tasks: [
            {
              title: "Task Title",
              category: "code"
            },
            {
              title: "Task Title",
              category: "resources"
            },
            {
              title: "Task Title",
              category: "testing"
            }
          ]
        },
        complete: {
          tasks: [
            {
              title: "Task Title",
              category: "resources"
            },
            {
              title: "Hello There",
              category: "research"
            },
            {
              title: "Task Title",
              category: "design"
            }
          ]
        }
      }
    }
  }
  componentDidMount() {
    getDashboard().then((dashboard)=> {
      console.log("App: " + dashboard);
      //this.setState({dashboard: dashboard, isFetching: false});
    })
  }
  logout = ()=>{
    logoutUser(this.props.history);
  };
  onDragEnd = result =>{
    // Reorder the column
  };
  render() {
    return (
      <div>
        <div className="App" >
          <header className="boardHeader">
            <h1 className="boardHeader_title">Sprint Title</h1>
            <h3>Date Range</h3>
            <button id='headavatar'><img src={useravatar} alt="user menu"></img></button>
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
              <button id="addcard">
                <img id="addcardbtn" src={addbtn} alt="add new card"></img>
              </button>
            </h3>
            <h3 className="stack_title">Assigned</h3>
            <h3 className="stack_title">In-Progress</h3>
            <h3 className="stack_title">Completed</h3>
          </div>
          <DragDropContext onDragEnd={this.onDragEnd}>
            <div className="stacks">
              <Stack tasks={this.state.dashboard.backlog.tasks} id="backlog-stack"/>
              <Stack tasks={this.state.dashboard.assigned.tasks} id="assigned-stack"/>
              <Stack tasks={this.state.dashboard.inProgress.tasks} id="inProgress-stack"/>
              <Stack tasks={this.state.dashboard.complete.tasks} id="complete-stack"/>
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