import React, { Component } from 'react'

export class T37_User extends Component {
  render() {
    return (
    //   <div>{this.props.name}</div>
    //   <div>{this.props.name(true)}</div>
      <div>{this.props.render(true)}</div>
    )
  }
}

export default T37_User