import React from 'react'

import WhitePaper from '../WhitePaper'

import styles from './styles.module.scss'

const Error = ({ message }) => {
  return (
    <WhitePaper>
      <div className={styles.error}>
        <h2>{message}</h2>
      </div>
    </WhitePaper>
  )
}

export default Error
