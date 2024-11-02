import React, { Component } from 'react'

export class T28_CallbackRefs extends Component {
    constructor(props) {
      super(props)
    
      this.cbRef=null;
      this.setCbRef=(element)=>{
          this.cbRef=element;
      }
    }
    
    componentDidMount() {
        if(this.cbRef){
            this.cbRef.focus();
        }
    }
    
    clickhandler = () => {
    }
    
    render() {
        return (
            <div>
                <input type='text' ref={this.setCbRef}></input>
                {/* the input element is  implicityly passed a s a parameter which is assigned to the callback ref property*/}
                <button onClick={this.clickhandler}>Click</button>
            </div>
        )
    }
}

export default T28_CallbackRefs