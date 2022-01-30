import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'hi',
    };
  }
  render() {
    return (
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>this.state.title</p>
        <Navbar title="Github FInder" />
      </div>
    );
  }
}
export default App;
