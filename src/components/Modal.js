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

export default class Modal extends Component {
    constructor() {
        super()
        this.state = //mockdata
            {
                task: {
                    _id: 0,
                    title: "Task Title",
                    description: "lorem ipsum whatever this is a long task description test.",
                    category: "code",
                    state: 'Backlog',
                    users: {
                        name: "George",
                        imageUrl: "",
                        _id: "0",
                        timestamp: "Due: 01/01/01"
                    },
                    comments: [
                        {
                            _id: "0",
                            user: {
                                name: "Nigel",
                                imageUrl: "",
                                _id: "0"
                            },
                            timestamp: "Due: 01/01/01",
                            comment: "Thank you for posting this task, we will get right on it."
                        },
                        {
                            _id: "1",
                            user: {
                                name: "Nigel",
                                imageUrl: "",
                                _id: "4"
                            },
                            timestamp: "Due: 01/01/01",
                            comment: "Test stuff"
                        }
                    ],
                    input: "input"
                }
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
                    <h2>{this.state.task.title}</h2>
                    <h5>{this.state.task.users.timestamp}</h5>
                    <h3>{this.state.task.description}</h3>
                    <p></p>
                    <div className="AssignedUsers">
                        {}
                    </div>
                    <div className="comments">
                        <div className="comments">
                            <img src={Photo} alt="user" />
                            <h6>{this.state.task.users.name}</h6>
                            {this.state.task.comments.map((comment, key) => {
                                return <p key={comment._id}>{comment.comment}</p>
                            })}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

