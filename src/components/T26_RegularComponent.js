import React, { Component } from 'react'

class T26_RegularComponent extends Component {
  render() {
    console.log('Regular Component Render');
    
    return (
      <div>Regular Component {this.props.name}</div>
    )
  }
}

export default T26_RegularComponent