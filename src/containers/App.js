import React, { Component } from 'react';
import Card from '../components/Card/Card';
import './App.css';

class App extends Component {
  constructor() {
      super()
      this.state = {
          robots: [],
          searchfield: ''
      }
  }
  render() {
      return (
        <div className='tc'>
          <h1 className='f1'>My Garden App</h1>
          <Card />
        </div>
      );  
  }
}

export default App;