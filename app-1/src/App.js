import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      text: ''
    }
  }

  updateText(newText){
    this.setState({
      text: newText
    })
    console.log(this.state.text)
  }

  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.updateText(e.target.value)}></input>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default App;
