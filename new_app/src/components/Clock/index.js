import { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    console.log("constructor");
  }
  componentDidMount() {
    console.log("ComonentDidMount");
    this.timerID = setInterval(this.tick, 1000);
  }

  tick = () => {
    this.setState({ date: new Date() });
  };

  componentWillUnmount() {
    console.log("compoentWillUnmount");
    clearInterval(this.timerID);
  }
  render() {
    const { date } = this.state;
    console.log("Render", date);
    return (
      <div>
        <h1>Clock</h1>
        <p>{date.toLocaleTimeString()}</p>
      </div>
    );
  }
}
export default Clock;
