import React, { Component } from 'react';
import CV from './CV/CV';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="main-container">
        <CV />
      </div>
    );
  }
}
