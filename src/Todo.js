import React, { Component } from "react";
import EditToDoForm from "./EditToDoForm";

class ToDo extends Component {
  render() {
    if(this.props.editFormMode === true) {
      return (
      <li>
       {this.props.task}
       <EditToDoForm task={this.props.task} id={this.props.id} editTask={this.props.editTask}/>
     </li>)
    } else {
      return (
      <li>
       {this.props.task}
       <button onClick={()=> this.props.removeTask(this.props.id)}>X</button>
       <button onClick={()=> this.props.editTask(this.props.id)}>Edit Task</button>
     </li>
      )
    }
  }
}

export default ToDo;