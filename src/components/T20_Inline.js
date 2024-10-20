import React from 'react'

const heading={
    fontSize:'52px',
    color:'blue'
}

function T20_Inline() {
  return (
    <div>
        <h2 style={{color:'red', border:'10px groove green'}}>Inline1</h2>
        <h2 style={heading}>Inline2</h2>
    </div>
  )
}

export default T20_Inline
// inline styles are not specified as a string, instead with an object in which key is a camelCase version of teh styling and the value is usually a string