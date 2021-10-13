import React from 'react'

import styles from './styles.module.scss'

const Button = ({ btnColor, labelColor, fontSize, children, ...props }) => {
  const commonStyles = {
    backgroundColor: btnColor,
    color: labelColor || 'white',
    fontSize,
  }
  return (
    <button style={commonStyles} className={styles.btn} {...props}>
      {children || 'label'}
    </button>
  )
}
export default Button
