import React from "react";

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };

    this.interval = setInterval(
      () => this.setState(prevState => ({ counter: ++prevState.counter })),
      1000
    );
  }
  render() {
    return <div>One {this.state.counter}</div>;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}
