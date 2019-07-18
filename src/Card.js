import React, { Component } from 'react';
import './index.css';

export default class Card extends Component {

    getCardColor() {
        if (this.props.task.team === 'dev') {
            return 'devColor'
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