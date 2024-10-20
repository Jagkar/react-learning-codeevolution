import React from 'react'
import './T20_MyStyle.css'
import styles from './T20_MyStyles.module.css'

function T20_StylingUsingModule() {
  return (
    <div>
        <h2 className='error'>Css without module Error</h2>
        <h2 className={styles.success}>Css with module Success</h2>
    </div>
  )
}

export default T20_StylingUsingModule
// adv: classes are locally scoped by default
