import { Component } from "react";
import './index.css'

class Counter extends Component {
  state = { count: 0 };
  onIncrement = () => {
    this.setState((lastState) => {
      return { count: lastState.count + 1 };
    });
  };
  onDecrement = () => {
    this.setState((lastState) => {
      return { count: lastState.count - 1 };
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <button className="button" onClick={this.onIncrement}>Increase</button>
        <button className="button" onClick={this.onDecrement}>Decrease</button>
      </div>
    );
  }
}
export default Counter;
