import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.handleIncrease = this.handleIncrease.bind(this);
  }

  handleIncrease = () => {
    this.setState(() => ({
      count: this.state.count + 1,
    }));
  };

  handleReset = () => {
    this.setState(() => ({
      count: 0,
    }));
  };

  render() {
    return (
      <>
        <h1>Increase counter</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleIncrease}>Click Me!</button>
        <button onClick={this.handleReset}>Reset</button>
      </>
    );
  }
}

export default Counter;
