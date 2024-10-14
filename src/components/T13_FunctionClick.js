import React from 'react'

function T13_FunctionClick() {
    function clickHandler(){
        console.log("Button clicked");
    }
  return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default T13_FunctionClick
// React events are named camelCase
// instead of clickHandler in " cH()", it is in {}
// dont add (), we want teh handler to be a function, not a function call

// clickHandler (without parentheses) is a reference to the function, allowing React to call it at the appropriate time (when the button is clicked).
// clickHandler() (with parentheses) calls the function immediately when the JSX is rendered.