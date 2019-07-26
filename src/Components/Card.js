import React, { Component } from 'react';
// import Comment from './assets/comment.png';
// import Priority from './assets/priority.png';
import './../sass/App.scss';
// import Modal from 'react-router-modal';
// import Photo from '../assets/user.png';
// import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class Card extends Component {

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
    opencard = () => {
        this.props.history.push('/dashboard/details/' + this.props.task._id)
    }
    render() {
        const task = this.props.task;
        return (
            <div onClick={this.opencard} className={"board__card " + this.getCardColor()}>
                <h3>{task.title}</h3>
                <h6>{task.duedate}</h6>
                {/* <img src={Comment} alt="Comment" /> */}
                {/* <img src={Priority} alt="Priority" /> */}
                {/*  */}
            </div>
        )
    }
}
export default withRouter(Card);