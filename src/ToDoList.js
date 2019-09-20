import React, { Component } from "react";
import NewToDoForm from "./NewToDoForm";
import EditToDoForm from "./EditToDoForm";
import Todo from "./Todo";
import uuid from "uuid/v4";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.editTask = this.editTask.bind(this);
  }

  addTask(task) {
    let newTask = { ...task, id: uuid(), editFormMode: false };
    this.setState(state => ({
      tasks: [...state.tasks, newTask]
    }));
    console.log("editformmode is", this.state.tasks);
  }

  removeTask(id) {
    let remainingTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks: remainingTasks });
  }

  editTask(id) {
    // let editTask = this.state.tasks.findIndex(task => task.id === id);
    // console.log("editTask")
    this.setState(state=> ({
      tasks: state.tasks.map(
        task => task.id ===id 
        ? {...task, editFormMode: !task.editFormMode}
        : task)
    }));
  }

  renderTasks() {
    return (
      <div>
        <ul>
          {this.state.tasks.map(task => (
            <Todo
              id={task.id}
              key={task.id}
              task={task.task}
              removeTask={this.removeTask}
              editTask={this.editTask}
              addTask={this.addTask}
              editFormMode={task.editFormMode}
            />
          ))}
        </ul>
      </div>
    );
  }

  render() {
      return (
        <div>
          {this.renderTasks()}
          <NewToDoForm addTask={this.addTask} />
        </div>
      );
  }
}

export default ToDoList;
