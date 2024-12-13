import React, { Component } from "react";
import withCounter from "./T34_withCounter";

class T34_ClickCounter extends Component {
  render() {
    const {count,incrementCount}=this.props
    // return <button onClick={this.incrementCount}>{this.props.name} Clicked {count} Times</button>;
    return <button onClick={incrementCount}>Clicked {count} Times</button>;
  }
}

export default withCounter(T34_ClickCounter);
