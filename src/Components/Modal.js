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
                        users: [
                            {
                            name: "George",
                            imageUrl: "",
                            _id: "0"
                            }
                        ],
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
                    <button>Category</button>
                    <button><img src='#' alt='priority'></img></button>
                    <h2>{this.state.task.title}</h2>
                    {/* <h4>{this.state.comments.timestamp}</h4> */}
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
                            {/* <h6>{this.state.comments.name}</h6> */}
                            {/* <p>{this.state.comments.comment}</p> */}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

