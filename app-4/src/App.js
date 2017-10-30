import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }
    this.updateUsername = this.updateUsername.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
    this.login = this.login.bind(this)
  }

    updateUsername(newUsername){
      this.setState({
        username: newUsername
      })
    }

    updatePassword(newPassword){
      this.setState({
        password: newPassword
      })
    }

    login(){
      alert("Username is " + this.state.username + ". " + "Password is " + this.state.password) + "."
    }
  

  
  render() {
    return (
      <div className="App">
        <input onChange={ (e) => this.updateUsername(e.target.value)}/>
        <input onChange={ (e) => this.updatePassword(e.target.value)}/>
        <button onClick={ this.login }>Login</button>
      </div>
    );
  }
}

export default App;
