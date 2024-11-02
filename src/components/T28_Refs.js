import React, { Component } from 'react'

export class T28_Refs extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef=React.createRef(); 
      // it is common to create ref in the constructor so that they can be referenced through out the component
    }
    componentDidMount(){
        this.inputRef.current.focus();
        console.log(this.inputRef); // it contains the current property which contains the input element
    }
    clickhandler=()=>{
        alert(this.inputRef.current.value);
    }
    clickhandler2=(event)=>{
        console.log(event.target.value);// here event wont work because event is form button and we want teh text from input field, so use inputRef
    }
    
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef}></input>
        <button onClick={this.clickhandler} >Click</button>
        <button onClick={this.clickhandler2} >Click</button>
      </div>
    )
  }
}

export default T28_Refs