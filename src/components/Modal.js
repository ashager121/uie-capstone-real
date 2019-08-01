import React, { Component } from 'react';
// import Stack from './Stack';
import './../sass/App.scss';
// import { ModalRoute } from 'react-router-modal';
import Photo from '../assets/user.png';
// import PropTypes from 'prop-types';
import Low from '../assets/lowp.svg';
import Med from '../assets/medp.svg';
import High from '../assets/highp.svg';
import Block from '../assets/blockp.svg';
import Avatar from './Avatar';
import { getTask, updateTask, newTask } from '../api/task';
import { withRouter } from 'react-router-dom'
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class Modal extends Component {

    getCardColor() {
        if (this.state.task.category === 'code') {
            return 'board__card--code'
        } else if (this.state.task.category === 'research') {
            return 'board__card--research'
        } else if (this.state.task.category === 'design') {
            return 'board__card--design'
        } else if (this.state.task.category === 'testing') {
            return 'board__card--testing'
        } else if (this.state.task.category === 'resources') {
            return 'board__card--resources'
        }
    }

    renderPriority() {
        if (this.state.task.priority == "lowp") {
            return 'lowp'
        } else if (this.state.task.priority == 'medp') {
            return 'medp'
        } else if (this.state.task.priority == 'highp') {
            return 'highp'
        } else if (this.state.task.priority == 'blockp') {
            return 'blockp'
        }
        else {
            return 'Select Priority'
        }
    }


    handleChange = event => {
        this.setState({
            ...this.state,
            task: {
                ...this.state.task,
                [event.target.id]: event.target.value
            }
        });
    };
    changeCategory = event => {
        this.setState({
            ...this.state,
            task: {
                ...this.state.task,
                category: event.currentTarget.dataset.value
            }
        });
    };
    changePriority = event => {
        this.setState({
            ...this.state,
            task: {
                ...this.state.task,
                priority: event.currentTarget.dataset.value
            }
        });
    };


    constructor() {
        super()
        this.state =
            {
                task: {
                    title: "",
                    description: "",
                    category: "",
                    state: '',
                    assignee: {
                        name: "",
                        imageUrl: "",
                        _id: ""
                    },
                    comments: [

                    ]
                },
                isNewTask: false
            }
    }

    componentDidMount = () => {
        if (this.props.match.params.taskId == 'new') {
            this.setState({ isNewTask: true })
        }
        else {
            getTask(this.props.match.params.taskId, this.props.history).then((task) => {
                // console.log("App: " + dashboard);
                console.log(task);
                this.setState({ task: task.data, isFetching: false });
            }
            )
        }
    }
    save = () => {
        if (this.state.isNewTask) {
            newTask(this.state.task, this.props.history).then(data => {
                if (data.success == true) {
                    this.setState({ task: data.data })
                }
                else {
                    console.log(data)
                }
            })
        }
        else {
            updateTask(this.state.task, this.props.history).then(data => {
                if (data.success == true) {
                    this.setState({ task: data.data })
                }
                else {
                    console.log(data)
                }
            })
        }

    }
    render() {
        return (
            <section className={"modal__wrapper " + this.getCardColor()} >
                <div className="modal__body">
                    <div className="category-wrapper">
                        <div className="dropdown">
                            <button className="dropbtn">Category</button>
                            <div className="dropdown-content">
                                <span id='codecategory' data-value="code" onClick={this.changeCategory}>Code</span>
                                <span id='researchcategory' data-value="research" onClick={this.changeCategory}>Research</span>
                                <span id='designcategory' data-value="design" onClick={this.changeCategory}>Design</span>
                                <span id='resourcescategory' data-value="resources" onClick={this.changeCategory}>Resources</span>
                                <span id='testingcategory' data-value="testing" onClick={this.changeCategory}>Testing</span>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="dropbtn">{this.renderPriority()}</button>
                            <div className="dropdown-content">
                                <span onClick={this.changePriority} data-value="lowp"><img id='lowp' src={Low} alt="animal"></img></span>
                                <span onClick={this.changePriority} data-value="medp"><img id='medp' src={Med} alt="animal"></img></span>
                                <span onClick={this.changePriority} data-value="highp"><img id='highp' src={High} alt="animal"></img></span>
                                <span onClick={this.changePriority} data-value="blockp"><img id='blockp' src={Block} alt="animal"></img></span>
                            </div>
                        </div>
                    </div>
                    <form>
                        <input type="text" id="title" onChange={this.handleChange} value={this.state.task.title} />
                        {/* <DatePicker id="dueDate"
                            selected={this.state.task.dueDate}
                            onChange={this.handleChange}
                        /> */}
                        <input type="text" id="description" onChange={this.handleChange} value={this.state.task.description} />

                        <div className="AssignedUsers">
                            {this.state.task.assignee.name}
                            <Avatar image={this.state.task.assignee.imageUrl} />
                        </div>
                        <div className="comments">
                            <div className="comments">
                                <img src={Photo} alt="user" />
                                {/* <h6>{this.state.task.assignees[0].name}</h6> */}
                                {/* {this.state.task.comments.map((comment, key) => {
                                return <p key={comment._id}>{comment.comment}</p>
                            })} */}
                            </div>
                        </div>
                        <button className="saveBtn" onClick={this.save}>Save</button>
                    </form>
                </div>
            </section>
        )
    }
}

