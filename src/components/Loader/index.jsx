import React from 'react'

import styles from './styles.module.scss'

const Loader = () => {
  return (
    <div className={styles.loaderContainer} data-title=".dot-pulse">
      <div>
        <div className={styles.dotPulse}></div>
      </div>
    </div>
  )
}

export default Loader
