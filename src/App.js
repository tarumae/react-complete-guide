import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {

  state = {
    people: [
      { name: 'Tom', age: 28 },
      { name: 'Alex', age: 35 },
      { name: 'Sam', age: 21 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    this.setState({
      people: [
        { name: newName, age: 28 },
        { name: 'Alex', age: 35 },
        { name: 'Sam', age: 22 }
      ]
    });
  }
  
  nameChangedHandler = (event) => {
    this.setState({
      people: [
        { name: 'Tom', age: 28 },
        { name: event.target.value, age: 35 },
        { name: 'Sam', age: 22 }
      ]
    })
  }
  
  
  // Two ways of passing down functions. 
  // First one is on the button with passing an anonymous arrow function.
  // Second one is binding the function with this, and passing the argument as a second parameter.
  
  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a react App.</h1>
        <p>This is really working!</p>
        <button style={style} onClick={() => this.switchNameHandler("Toomas")}>Switch Name</button>
        <Person name={this.state.people[0].name} age={this.state.people[0].age} click={this.switchNameHandler.bind(this, 'Tom!')} />
        <Person name={this.state.people[1].name} age={this.state.people[1].age} changed={this.nameChangedHandler}/>
        <Person name={this.state.people[2].name} age={this.state.people[2].age}> My hobbies: cartoons </Person>
      </div>
    );
  }
}

export default App;
