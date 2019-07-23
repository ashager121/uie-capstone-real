import React, { Component } from 'react';
import '../index.css';
// import Photo from '../assets/user.png';
import Overlay from './CardExpanded.js';
import 'react-router-modal/css/react-router-modal.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export default class Card extends Component {

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
    render() {
        const task = this.props.task;
        return (
            <div className={"board__card " + this.getCardColor()}>
                <h3>{task.title}</h3>
                <h4>Due: 01/01/01</h4>
            </div>
        )
    }
}

// // Modal Starts Here?
