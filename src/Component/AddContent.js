import React, { Component } from 'react';
import './App.css';

class AddContent extends Component {
  state = {
    tasks: "",
  };

  handleAdd = (e) => {
    e.preventDefault();
    if (this.state.tasks === "") {
      alert("Enter a task");
      return;
    }
    this.props.addContentHandler({ tasks: this.state.tasks });
    this.setState({ tasks: "" });
  };

  render() {
    return (
      <div className="App">
        <h1>TO-DO LIST</h1>
        <hr id='hrline' />
        <form className='task' onSubmit={this.handleAdd}>
          <input
            type='text'
            placeholder="Enter your task"
            value={this.state.tasks}
            onChange={(e) => this.setState({ tasks: e.target.value })}
          />
          <button type='submit'>ADD</button>
        </form>
      </div>
    );
  }
}

export default AddContent;
