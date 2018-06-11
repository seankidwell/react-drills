import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Finsertcoin%2Ffiles%2F2018%2F06%2Fhalo-infinite.jpg'}/>
      </div>
    );
  }
}

export default App;
