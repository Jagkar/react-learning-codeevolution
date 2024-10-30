import React, { PureComponent } from 'react'

class T26_PureComponent extends PureComponent {
  render() {
    console.log('Pure Component render');
    
    return (
      <div>
        Pure Component {this.props.name}
      </div>
    )
  }
}

export default T26_PureComponent