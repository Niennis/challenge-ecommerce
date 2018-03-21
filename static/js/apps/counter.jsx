import React, { Component } from 'react';


class Counter extends Component {
  constructor() {
    super();
    this.state = {
      total: null,
    }
  }

  addTotal(price) {
    let total = 0;
    return total + price;
  }

  render() {
    return (
      <div className="counter">
        ${addTotal}
      </div>
    );
  }
}

export default Counter;