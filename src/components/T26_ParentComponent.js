import React, { Component,PureComponent } from 'react'
import T26_RegularComponent from './T26_RegularComponent'
import T26_PureComponent from './T26_PureComponent'
import T27_memo from './T27_memo'

class T26_ParentComponent extends Component {
// class T26_ParentComponent extends PureComponent {
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
        {/* <T26_RegularComponent name={this.state.name}/> */}
        {/* <T26_PureComponent name={this.state.name}/> */}

        {/* T27_memo */}
        <T27_memo name={this.state.name}/>
      </div>
    )
  }
}

export default T26_ParentComponent