import React, { Component } from 'react';
import Stack from './Stack';
import './../sass/App.scss';
import { ModalRoute } from 'react-router-modal';




export default class App extends Component {
  constructor() {
    super()
    this.state = {
      stacks: {
        backlog: [
          {
            title: "Task Title",
            category: "code"
          },
          {
            title: "Task Title",
            category: "testing"
          },
          {
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
          <div class= "filters__wrapper">
            <btn id="codebtn">Code</btn>
            <btn id="researchbtn">Research</btn>
            <btn id="designbtn">Design</btn>
            <btn id="resourcesbtn">Resources</btn>
            <btn id="testingbtn">Testing</btn>
          </div>
        </div>
        <div className="stacks">
          <Stack tasks={this.state.stacks.backlog} />
          <Stack tasks={this.state.stacks.assigned} />
          <Stack tasks={this.state.stacks.inprogress} />
          <Stack tasks={this.state.stacks.complete} />
        </div>
        <ModalRoute
          component={this.Details}
          path='/dashboard/details/:taskId'
          parentPath='/dashboard/'
        />
        {/* <Link to=‘/dashboard/details/66’>show Details66</Link> */}
      </div >
    );
  }
}
