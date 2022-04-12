import React from 'react';
import "./todoApp.css";


class TodoApp extends React.Component{

  // TodoApp component constructor
  constructor(props){
    super(props);

    // New variables for items and text
    this.state = {
      tasks: [],
      text: ""
    };

    // Hande change on data
    this.changeText = this.changeText.bind(this);
    this.addElement = this.addElement.bind(this);
  }

  changeText($event){
    const newValue = $event.target.value;
    this.setState({text: newValue})
  }

  addElement($event){
    $event.preventDefault();
    if(this.state.text == ""){
      return;
    }

    const newItem = {
      text: this.state.text,
      date: Date.now()
    }

    const newTasks = this.state.tasks;
    newTasks.push(newItem);

    this.setState({
      text: '',
      tasks: newTasks
    });
  }

  render(){
    return <>
      <h3>Add new task: </h3>
      <form>
        <label>What do you need?</label>
        <input id ="todo-input" value={this.state.text} onChange ={this.changeText}></input>
        <button onClick ={this.addElement}>Add new Task # {this.state.tasks.length + 1}</button>
      </form>
      <ol>
        {this.state.tasks.map(cosito => {
          return <li>{cosito.text}</li>
      })}
      </ol>
    </>
  }

}

export default TodoApp;
