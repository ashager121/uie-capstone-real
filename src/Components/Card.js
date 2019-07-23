import React, { Component } from 'react';
import '../index.scss';
// import Comment from './assetts/comment.png';
// import Priority from './assetts/priority.png';

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
                <img src={Comment} alt="Comment" />
                <img src={Priority} alt="Priority" />
            </div>
        )
    }
}

// // Modal Starts Here?
