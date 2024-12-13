import React from 'react'
import ReactDOM from 'react-dom'

function T31_PortalDemo() {
  return ReactDOM.createPortal(
        <h1>Portal Demo</h1>
        , document.getElementById('portal-root')
  )
}

export default T31_PortalDemo