import React, { Component } from 'react';
import Stack from './Stack';




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
        <header className="boardTitle">
          <h3 className="boardTitle__h3">Sprint Title</h3>
        </header>
        <div className="boards__section ">
          <Stack tasks={this.state.stacks.backlog} />
          <Stack tasks={this.state.stacks.assigned} />
          <Stack tasks={this.state.stacks.inprogress} />
          <Stack tasks={this.state.stacks.complete} />
        </div>
      </div >
    );
  }
}
