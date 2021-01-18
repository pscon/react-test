 import React, { Component} from 'react';
import './App.css';

import Person from './Person/Person';


class App extends Component { 
state = {
    persons: [ 
        { name: 'tife', age: 28},
        { name: 'paul', age: 22},
        { name: 'tope', age: 33}
    ],  
    otherState: 'some other value'
 
}

nameChangedHandler = (event,id) => {
    this.setState( {
        persons: [
        {id: 'bdbdb', name: 'tife', age: 28},
        { id: 'bdbdb', name: 'paul', age: 22},
        {  id: 'bdbdb', name: 'tope', age: 33}
        ]
})
    }

deletePersonHandler = (personIndex) => {
//const persons = this.state.persons.slice();
const persons = [...this.state.person];

persons.splice(personIndex, 1);
this.setState({persons: persons});
}

togglePersonsHandler = () => {
const doesShow = this.state.showPersons;
this.setState( { showPersons: !doesShow} );
}

render() {
    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
    };

    let persons = null;

    if (this.state.showPersons) {
        persons = (
<div>
    {this.state.persons.map((person, index) => {
       return <Person 
       click={() => this.deletePersonHandler(index)}
        name={person.name}
      age={person.age} 
      key={person.id} /> 
    })}
     </div> 
     );

     style.backgroundColor = 'red';
    
    }

    let classes = ['red', 'bold'].join(' ');


  return (
     
   <div className="App">
   <h1> Hi, i'm a React App</h1>
   <p className={classes}>This is really working!</p>
   <button 
   style={style}
   onClick={ ()=> this.togglePersonsHandler()}>Switch Name</button> 
{persons}  
    </div>
   
 );
// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'does this work'));
    }
}
  
export default App;
