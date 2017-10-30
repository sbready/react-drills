import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      array: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'],
      filteredList: ''
    }
  }

  updatedFilter(change){
    this.setState({
      filteredList: change
    })
  

  }
  render() {
    let x = this.state.array.filter((element,index) => {
      return element.includes(this.state.filteredList)
    }).map((element,index) => {
      return <h2>{ element }</h2>
    })

    return (
      <div className="App">
        <input onChange={(e) => this.updatedFilter(e.target.value)}></input>
        <p>{this.state.text}</p>
        {x}
      </div>
    );
  }
}


export default App;