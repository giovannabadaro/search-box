import React from 'react'

import styles from './styles.module.scss'

const Main = ({ children }) => {
  return <main className={styles.mainContainer}>{children} </main>
}
export default Main
