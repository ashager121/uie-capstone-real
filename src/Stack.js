import React, { Component } from 'react';
import Card from './Card'
import './index.css'

export default class Stack extends Component {
    constructor() {
        super()
        this.state = {
            tasks: [
                {
                    title: "Task Title"
                },
                {
                    title: "Task Title2",
                    team: "dev"
                },
                {
                    title: "Task Title3"
                }
            ]
        }
    }
    render() {
        var tasksList = this.state.tasks.map(function (task) {
            return <Card task={task} />;
        })
        return (
            <section className="board" >
                <div className="board__wrap">
                    <h3>Assigned</h3>
                    <div className="board__section">
                        {tasksList}
                    </div>
                </div>
            </section>
        )
    }
}
