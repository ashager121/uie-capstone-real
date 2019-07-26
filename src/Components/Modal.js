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
                    users: [{
                        name: "name",
                        imageUrl: "",
                        _id: "0"
                    }],
                    comments: [
                        {
                            _id: "",
                            user: {
                                name: "",
                                imageUrl: "",
                                _id: ""
                            },
                            timestamp: "01/01/01",
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
                    <h3>Task Title</h3>
                    <h4>Due: 01/01/01</h4>
                    <p>Task description goes here. Scott honks are the new greatest meme and this is just placeholder text for the lulz.</p>
                    <div className="profilePhotos">
                        <img src={Photo} alt="user" />
                        <img src={Photo} alt="user" />
                        <img src={Photo} alt="user" />
                        <img src={Photo} alt="user" />
                        <img src={Photo} alt="user" />
                        <img src={Photo} alt="user" />
                    </div>
                    <div className="comments">
                        <div className="comments">
                            <img src={Photo} alt="user" />
                            <h6>Filler McGee</h6>
                            <p>User comment about project status or issue. Whatever they need it to be.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

