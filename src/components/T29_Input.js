import React, { Component } from 'react'

class T29_Input extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef=React.createRef();
    }

    // Will be called by parent component
    focusInput=()=>{
        this.inputRef.current.focus();
    }
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef}></input>
      </div>
    )
  }
}

export default T29_Input