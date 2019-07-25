import React, { Component } from 'react';
import Stack from './Stack';
import './../sass/App.scss';
import { ModalRoute } from 'react-router-modal';
import Modal from './Modal';
import { Link } from 'react-router-dom';
import 'react-router-modal/css/react-router-modal.css';




export default class App extends Component {
  constructor() {
    super()
    this.state = //mockdata
      {
        stacks: {
          backlog: [
            {
              _id: 0,
              title: "Task Title",
              category: "code",

            },
            {
              _id: 1,
              title: "Task Title",
              category: "testing"
            },
            {
              _id: 2,
              title: "Task Title",
              category: "code"
            }
          ],
          assigned: [
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

          ],
          inprogress: [
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

          ],
          complete: [
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
  render() {
    return (
      <div className="App" >
        <header className="boardHeader">
          <h1 className="boardHeader_dtitle">Sprint Title</h1>
          <h3>Date Range</h3>
        </header>
        <div class="filters">
          <div class="filters__wrapper">
            <btn id="codebtn">Code</btn>
            <btn id="researchbtn">Research</btn>
            <btn id="designbtn">Design</btn>
            <btn id="resourcesbtn">Resources</btn>
            <btn id="testingbtn">Testing</btn>
          </div>
        </div>
        <div class="stack_title">
          <h3>Backlog</h3>
          <h3>Assigned</h3>
          <h3>In-Progress</h3>
          <h3>Completed</h3>
        </div>
        <div className="stacks">
          <Stack tasks={this.state.stacks.backlog} />
          <Stack tasks={this.state.stacks.assigned} />
          <Stack tasks={this.state.stacks.inprogress} />
          <Stack tasks={this.state.stacks.complete} />
        </div>
        <ModalRoute
          component={Modal}
          path='/dashboard/details/:taskId'
          parentPath='/dashboard/'
        />
      </div>
    );
  }
}                                                                     