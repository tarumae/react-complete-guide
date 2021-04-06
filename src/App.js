import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js';

const app = props => {
  const [peopleState, setPeopleState] = useState({
    people: [
      { name: 'Tom', age: 28 },
      { name: 'Alex', age: 35 },
      { name: 'Sam', age: 21 }
    ]
  });

  const [otherState, setOtherState] = useState({ otherState: 'some other value' });

  const switchNameHandler = (newName) => {
    setPeopleState({
      people: [
        { name: newName, age: 28 },
        { name: 'Alex', age: 35 },
        { name: 'Sam', age: 22 }
      ]
    });
  }
   // Two ways of passing down functions. 
   // First one is on the button with passing an anonymous arrow function.
   // Second one is binding the function with this, and passing the argument as a second parameter.
  
  const nameChangedHandler = (event) => {
    setPeopleState({
      people: [
        { name: 'Tom', age: 28 },
        { name: event.target.value, age: 35 },
        { name: 'Sam', age: 22 }
      ]
    })
  }
  
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
      <button style={style} onClick={() => switchNameHandler("Toomas")}>Switch Name</button>
      <Person name={peopleState.people[0].name} age={peopleState.people[0].age} click={switchNameHandler.bind(this, 'Tom!')} />
      <Person name={peopleState.people[1].name} age={peopleState.people[1].age} changed={nameChangedHandler}/>
      <Person name={peopleState.people[2].name} age={peopleState.people[2].age}> My hobbies: cartoons </Person>
    </div>
  );
}

export default app;
