import React, { Component } from "react";
import Stack from "./Stack";
import "./../sass/App.scss";
import { ModalRoute } from "react-router-modal";
import Modal from "./Modal";
import "react-router-modal/css/react-router-modal.css";
import addbtn from "./../assets/plus.svg";
import { DragDropContext } from "react-beautiful-dnd";
import { withRouter } from "react-router-dom";
import { getDashboard, updateDashboard } from "../api/dashboard";
import { getCurrentUser } from "../api/user";
import { throttle } from "throttle-debounce";
import { Link } from "react-router-dom";
import cobra from "../assets/avatars/cobra.svg";

class App extends Component {
  constructor() {
    super();
    this.state = /*mockdata*/ {
      isFetching: true,
      imageUrl: "",
      dashboard: {
        backlog: {
          tasks: []
        },
        assigned: {
          tasks: []
        },
        inProgress: {
          tasks: []
        },
        complete: {
          tasks: []
        }
      }
    };
  }
  componentDidMount = () => {
    this.props.history.listen(location => {
      if (location.state && location.state.refresh) {
        this.fetchData();
      }
    });
    this.fetchData();

    getCurrentUser(this.props.history).then(
      response => {
        if (response && response.success) {
          this.setState({ imageUrl: response.data.imageUrl });
        }
      },
      error => {
        console.log(error);
      }
    );
  };
  fetchData = () => {
    getDashboard(this.props.history).then(dashboard => {
      console.log(dashboard);
      this.setState({ dashboard: dashboard, isFetching: false });
    });
  };
  newTask = () => {
    this.props.history.push("/dashboard/details/new");
  };

  saveDashboard = throttle(5000, () => {
    console.log("Saving Dashboard");
    updateDashboard(this.state.dashboard, this.props.history).then(
      dashboard => {
        this.setState({ dashboard: dashboard });
      }
    );
  });
  onDragEnd = result => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    if (source.droppableId === destination.droppableId) {
      let taskList = this.state.dashboard[source.droppableId].tasks;

      let selectedTasks = taskList.splice(source.index, 1);
      taskList.splice(destination.index, 0, selectedTasks[0]);

      this.setState({ dashboard: this.state.dashboard }, () => {
        this.saveDashboard();
      });
    } else {
      let sourceList = this.state.dashboard[source.droppableId].tasks;
      let destinationList = this.state.dashboard[destination.droppableId].tasks;

      let selectedTasks = sourceList.splice(source.index, 1);
      destinationList.splice(destination.index, 0, selectedTasks[0]);

      this.setState({ dashboard: this.state.dashboard }, () => {
        this.saveDashboard();
      });
    }
  };
  render() {
    return (
      <div>
        <div className="App">
          <header className="boardHeader">
            <h1 className="boardHeader_title">SAAS Design Sprint</h1>
            <h3>8/3/2020 - 8/10/2020</h3>
            <button id="headavatar">
              <Link to="/profile">
                <img src={cobra} alt="cobra avatar" />
              </Link>
            </button>
          </header>
          {/* <div className="filters">
            <div className="filters__wrapper">
              <button id="codebtn">Code</button>
              <button id="researchbtn">Research</button>
              <button id="designbtn">Design</button>
              <button id="resourcesbtn">Resources</button>
              <button id="testingbtn">Testing</button>
            </div>
          </div> */}
          <div className="stack_wrapper">
            <h3 className="stack_title">
              Backlog
              <button id="addcard" onClick={this.newTask}>
                <img id="addcardbtn" src={addbtn} alt="add new card" />
              </button>
            </h3>
            <h3 className="stack_title">Assigned</h3>
            <h3 className="stack_title">In-Progress</h3>
            <h3 className="stack_title">Completed</h3>
          </div>
          <DragDropContext onDragEnd={this.onDragEnd}>
            <div className="stacks">
              <Stack tasks={this.state.dashboard.backlog.tasks} id="backlog" />
              <Stack
                tasks={this.state.dashboard.assigned.tasks}
                id="assigned"
              />
              <Stack
                tasks={this.state.dashboard.inProgress.tasks}
                id="inProgress"
              />
              <Stack
                tasks={this.state.dashboard.complete.tasks}
                id="complete"
              />
            </div>
          </DragDropContext>
        </div>
        <ModalRoute
          component={Modal}
          path="/dashboard/details/:taskId"
          parentPath="/dashboard/"
        />
      </div>
    );
  }
}
export default withRouter(App);
