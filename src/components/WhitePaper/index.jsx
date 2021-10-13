import React from 'react'

import styles from './styles.module.scss'

const WhitePaper = ({ children }) => {
  return <section className={styles.whitePaperBox}>{children}</section>
}

export default WhitePaper
