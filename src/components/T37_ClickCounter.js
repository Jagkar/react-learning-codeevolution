import React from 'react'

const T37_ClickCounter=(props)=> {
  return (
    <div>
        <button onClick={props.incrementCount}>Clicked {props.count} times</button>
    </div>
  )
}

export default T37_ClickCounter