import React from 'react'

function T15_ChildComponent(props) {
  return (
    <div>
        {/* <button onClick={props.greetHandler}>
            Greet Parent
        </button> */}
        <button onClick={()=>props.greetHandler('child')}>
            Greet Parent
        </button>
    </div>
  )
}

export default T15_ChildComponent