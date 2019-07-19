import React, { Component } from 'react';
import Card from './Card.js'
import '../index.css'

export default class Stack extends Component {
    constructor() {
        super()
        this.state = {
            stacks: {
                backlog: [
                    {
                        title: "Task Title",
                        category: "code"
                    },
                    {
                        title: "Task Title",
                        category: "testing"
                    },
                    {
                        title: "Task Title",
                        category: "code"
                    }
                ],
                assigned: [
                    {
                        title: "Task Title",
                        category: "code"
                    },
                    {
                        title: "Task Title",
                        category: "code"
                    },
                    {
                        title: "Task Title",
                        category: "testing"
                    }

                ],
                inprogress: [
                    {
                        title: "Task Title",
                        category: "code"
                    },
                    {
                        title: "Task Title",
                        category: "resources"
                    },
                    {
                        title: "Task Title",
                        category: "testing"
                    }

                ],
                complete: [
                    {
                        title: "Task Title",
                        category: "resources"
                    },
                    {
                        title: "Task Title",
                        category: "research"
                    },
                    {
                        title: "Task Title",
                        category: "design"
                    }

                ]
            }
        }
    }
    // pass stacks as a prop
    render() {
        var tasksList = this.state.stacks.complete.map((task, index) => {
            return <Card task={task} key={index} />
        })
        return (
            < section className="board" >
                <div className="board__wrap">
                    <h3>Assigned</h3>
                    <div className="board__section">
                        {tasksList}
                        Hello
                    </div>
                </div>
            </section >
        )
    }
}
