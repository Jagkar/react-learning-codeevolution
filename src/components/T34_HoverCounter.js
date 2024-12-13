import React, { Component } from "react";
import withCounter from "./T34_withCounter";

class T34_HoverCounter extends Component {
  render() {
    const {count,incrementCount}=this.props
    return (
      <div>
        <h2 onMouseOver={incrementCount}> Hover {count} times</h2>
      </div>
    );
  }
}

export default withCounter(T34_HoverCounter);
