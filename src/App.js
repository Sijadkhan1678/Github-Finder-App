import React, { Component } from 'react';

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
        <p>this.state</p>
      </div>
    );
  }
}
export default App;
