import React, { Component } from "react";
import withCounter from "./T35_withCounter";

class T35_ClickCounter extends Component {
  render() {
    const {count,incrementCount,name}=this.props
    return <button onClick={incrementCount}>{name} Clicked {count} Times</button>;
  }
}

export default withCounter(T35_ClickCounter,5);
