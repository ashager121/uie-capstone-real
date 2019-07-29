import React, { Component } from 'react';
// import Stack from './Stack';
import './../sass/App.scss';
// import { ModalRoute } from 'react-router-modal';
import Photo from '../assets/user.png';
// import PropTypes from 'prop-types';



export default class Modal extends Component {
    constructor() {
        super()
        this.state = //mockdata
            {
                task: {
                    _id: 0,
                    title: "Task Title",
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
                <div class="dropdown">
                <button class="dropbtn">Category</button>
                <div class="dropdown-content">
                    <a>Code</a>
                    <a>Research</a>
                    <a>Design</a>
                    <a>Resources</a>
                    <a>Testing</a>
                </div>
                </div>
                    <button><img src='#' alt='priority'></img></button>
                    <h2>{this.state.task.title}</h2>
                    <h4>{this.state.task.users.timestamp}</h4>
                    <p></p>
                    <div className="profilePhotos">
                        {/* <img src={Photo} alt="user" />
                        <img src={Photo} alt="user" />
                        <img src={Photo} alt="user" />
                        <img src={Photo} alt="user" />
                        <img src={Photo} alt="user" />
                        <img src={Photo} alt="user" /> */}
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

