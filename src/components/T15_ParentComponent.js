import React, { Component } from 'react'
import T15_ChildComponent from './T15_ChildComponent';

export class T15_ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'parent'
      }
      this.greetParent=this.greetParent.bind(this);
    }
    // greetParent(){
    //     alert(`hello ${this.state.parentName}`);
    // }
    greetParent(childName){
        alert(`hello ${this.state.parentName} from ${childName}`);
    }
  render() {
    return (
      <div>
        <T15_ChildComponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default T15_ParentComponent