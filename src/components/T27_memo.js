import React from 'react'

function T27_memo({name}) {
    console.log('Rendering Memo component');
    
  return (
    <div>{name}</div>
  )
  // refer to change in file T26_ParentComponent
}

// export default T27_memo
export default React.memo(T27_memo)