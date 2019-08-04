import React, { Component } from "react";
import Card from "./Card.js";
import "./../sass/App.scss";
import { Droppable } from "react-beautiful-dnd";

export default class Stack extends Component {
  // pass stacks as a prop
  render() {
    var tasksList = this.props.tasks.map((task, index) => {
      return <Card task={task} index={index} key={index} />;
    });
    return (
      <section className="board">
        <div className="board__wrap">
          <Droppable droppableId={this.props.id}>
            {provided => (
              <div
                className="board__section"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {tasksList}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </section>
    );
  }
}
