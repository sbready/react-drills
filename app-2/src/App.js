import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      array: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }


  }
  render() {
    let x = this.state.array.map((element,index,array) => {
      return (
        <h2>{element}</h2>
      )
    })

    return (
      <div className="App">
        {x}
      </div>
    );
  }
}

export default App;
