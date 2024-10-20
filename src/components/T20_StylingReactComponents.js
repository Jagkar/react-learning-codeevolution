// 1. CSS StyleSheets 
// 2. Inline styling
// 3. CSS Modules: available in react-scripts 2 or higher, file name must be suffix with .module.css
// 4. CSS in JS Libraries:(Styled Components)
import React from 'react'
import './T20_MyStyle.css'

function T20_StylingReactComponents(props) {
    let className=props.primary?'primary':''
  return (
    <div>
        {/* <h1 className='primary'>StyleSheet</h1> */}
        <h1 className={`${className} font-xl`}>StyleSheet</h1>
    </div>
  )
}

export default T20_StylingReactComponents
// can apply styles based on condition by props and states
// to specify multiple classes use template literals
// alternate to template literals: there is a library called className which you can make use of.
