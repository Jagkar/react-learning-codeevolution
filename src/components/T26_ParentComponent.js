import React, { Component } from 'react'
import T26_RegularComponent from './T26_RegularComponent'
import T26_PureComponent from './T26_PureComponent'

class T26_ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Jagdeep'
      }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
            name: 'Jagdeep'
            })
        }, 2000)
    }
  render() {
    console.log('*********Parent Component Render********');
    
    return (
      <div>Parent Component
        <T26_RegularComponent name={this.state.name}/>
        <T26_PureComponent name={this.state.name}/>
      </div>
    )
  }
}

export default T26_ParentComponent