import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      array: ["this", "is", "really", "dumb"]
    };
  }

  render() {
    let words = this.state.array.map((e,i) => {
      return (
        <h2 key={i}>{e}</h2>
      )
    })
    return (
      <div className="App" >
        {words}
      </div>
  )}
}

export default App;
