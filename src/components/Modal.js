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
// import Avatar from'./Avatar';
import { getTask } from '../api/task';
import { withRouter } from 'react-router-dom'
export default class Modal extends Component {

    getCardColor() {
        if (this.props.task.category === 'code') {
            return 'board__card--code'
        } else if (this.props.task.category === 'research') {
            return 'board__card--research'
        } else if (this.props.task.category === 'design') {
            return 'board__card--design'
        } else if (this.props.task.category === 'testing') {
            return 'board__card--testing'
        } else if (this.props.task.category === 'resources') {
            return 'board__card--resources'
        }
    }

    constructor() {
        super()
        this.state =
            {
                task: {
                    title: "",
                    description: "",
                    category: "",
                    state: '',
                    assignees: [{
                        name: "",
                        imageUrl: "",
                        _id: "",
                        timestamp: ""
                    }],
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
    render() {
        return (
            <section className="modal__wrapper" >
                <div className="modal__body">
                    <div class="category-wrapper">
                        <div class="dropdown">
                            <button class="dropbtn">Category</button>
                            <div class="dropdown-content">
                                <span  id='codecategory'>Code</span>
                                <span id='researchcategory'>Research</span>
                                <span id='designcategory'>Design</span>
                                <span id='resourcescategory'>Resources</span>
                                <span id='testingcategory'>Testing</span>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">Priority</button>
                            <div class="dropdown-content">
                                <span><img id='lowp' src={Low} alt="animal"></img></span>
                                <span><img id='medp' src={Med} alt="animal"></img></span>                
                                <span><img id='medp' src={High} alt="animal"></img></span>
                                <span><img id='medp' src={Block} alt="animal"></img></span>      
                            </div>
                        </div>
                    </div>
                    <form>
                        <input>{this.state.task.title}</input>
                        <input>{this.state.task.dueDate}</input>
                        <input>{this.state.task.description}</input>
                        <div className="AssignedUsers">
                            {this.state.tasks.assignees}
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
                    </form>
                </div>
            </section>
        )
    }
}

