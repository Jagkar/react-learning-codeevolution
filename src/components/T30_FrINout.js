import React from 'react'

// function T30_FrINout() {
//   return (
//     <div>
//         <input type='text'/>
//     </div>
//   )
// }
const T30_FrINout=React.forwardRef((props,ref) =>{
    return (
      <div>
          <input type='text' ref={ref}/>
      </div>
    )
  })

export default T30_FrINout