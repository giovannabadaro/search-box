import React from 'react'
import WhitePaper from '../WhitePaper'

import styles from './styles.module.scss'

const Loader = () => {
  return (
    <WhitePaper>
      <div className={styles.loaderContainer} data-title=".dot-pulse">
        <div>
          <div className={styles.dotPulse}></div>
        </div>
      </div>
    </WhitePaper>
  )
}

export default Loader
