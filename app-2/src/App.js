import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      array: ["pizza", "spaghetti", "ice cream", "sushi", "hotdog"],
      userInput: ''
    }
  }
  changer(val) {
    this.setState({userInput: val})
  }
  render() {
    let foodsToDisplay = this.state.array.filter((e,i) => {
      return e.includes(this.state.userInput);
    }).map((e,i) => {
      return <h2 key={i}>{e}</h2>
    })
    return (
      <div className="App">
        <input onChange={e => this.changer(e.target.value)} type="test" />
        {foodsToDisplay}
      </div>
    );
  }
}

export default App;
