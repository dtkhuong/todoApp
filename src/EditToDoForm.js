import React, { Component } from "react";

class EditToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: this.props.task};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.editTask(this.state);
    this.setState(state=> ({
      tasks: state.tasks.map(
        task => task.id === evt.target.id
        ? {...task, editFormMode: !task.editFormMode}
        : task)
    }));
  }

  render() {

    let showForm = this.state.showForm;
  
    return (
      <form onSubmit={this.handleSubmit} style={{display: showForm}}>
        <label htmlFor="task">Edit To Do: </label>
        <input
          id="task"
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Update task</button>
      </form>
    );
  }
}

export default EditToDoForm;
