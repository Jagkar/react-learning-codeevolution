import React, { Component } from "react";
import T29_Input from "./T29_Input";

class T29_FocusInput extends Component {
  constructor(props) {
    super(props);

    this.componentRef = React.createRef();
  }
  clickHandler = () => {
    this.componentRef.current.focusInput();
  };
  render() {
    return (
      <div>
        <T29_Input ref={this.componentRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default T29_FocusInput;
