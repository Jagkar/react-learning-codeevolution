import React, { Component } from 'react'
import T30_FrINout from './T30_FrINout'

export class T30_FRParentInput extends Component {
  constructor(props) {
    super(props)
  
    this.inputRef=React.createRef()
  }
  clickHandler=()=>{
    this.inputRef.current.focus()
  }
  render() {
    return (
      <div>
        <T30_FrINout ref={this.inputRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default T30_FRParentInput