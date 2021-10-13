import React from 'react'

import styles from './styles.module.scss'

const BreadCrumb = ({ categories }) => {
  return (
    <ul className={styles.breadCrumbContainer}>
      {categories?.map((category) => (
        <li key={category}>{category}</li>
      ))}
    </ul>
  )
}

export default BreadCrumb
