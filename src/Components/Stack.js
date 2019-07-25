import React, { Component } from 'react';
import Card from './Card.js'
import './../sass/App.scss';

export default class Stack extends Component {

    // pass stacks as a prop
    render() {
        var tasksList = this.props.tasks.map((task, index) => {
            return <Card task={task} key={index} />
        })
        return (
            <section className="board" >
                <div className="board__wrap">
                    <div className="board__section">
                        {tasksList}
                    </div>
                </div>
            </section>
        )
    }
}
