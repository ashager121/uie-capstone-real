import React, { Component } from 'react';
import Stack from './Stack';
import './../sass/App.scss';
import { ModalRoute } from 'react-router-modal';
import Photo from '../assets/user.png';
import PropTypes from 'prop-types';


export default class Modal extends Component {
    render() {
        return (
            <section className="board" >
                <div className="board__overlay">
                    <h3>Assigned</h3>
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
                            <h6>User Name</h6>
                            <p>User comment about project status or issue. Whatever they need it to be.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}