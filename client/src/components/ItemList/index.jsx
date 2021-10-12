import React from 'react'
import { Link } from 'react-router-dom'

import imgTeste1 from '../../assets/images/imgteste1.jpg'
import styles from './styles.module.scss'

const ItemList = () => {
  return (
    <ul>
      <li className={styles.itemContent}>
        <Link to="/items/:id">
          <div className={styles.itemProductImageBox}>
            <img src={imgTeste1} alt="" />
          </div>
          <div className={styles.itemProductDescription}>
            <span>$ 1.980</span>
            <h2>Auricular Tws Inalambrico Bluetooth P/ iPhone Moto Samsung</h2>
          </div>
          <div className={styles.itemProductLocation}>
            <span>Capital Federal</span>
          </div>
        </Link>
      </li>
      <li className={styles.itemContent}>
        <Link to="/items/:id">
          <div className={styles.itemProductImageBox}>
            <img src={imgTeste1} alt="" />
          </div>
          <div className={styles.itemProductDescription}>
            <span>$ 1.980</span>
            <h2>Auricular Tws Inalambrico Bluetooth P/ iPhone Moto Samsung</h2>
          </div>
          <div className={styles.itemProductLocation}>
            <span>Capital Federal</span>
          </div>
        </Link>
      </li>
      <li className={styles.itemContent}>
        <Link to="/items/:id">
          <div className={styles.itemProductImageBox}>
            <img src={imgTeste1} alt="" />
          </div>
          <div className={styles.itemProductDescription}>
            <span>$ 1.980</span>
            <h2>Auricular Tws Inalambrico Bluetooth P/ iPhone Moto Samsung</h2>
          </div>
          <div className={styles.itemProductLocation}>
            <span>Capital Federal</span>
          </div>
        </Link>
      </li>
      <li className={styles.itemContent}>
        <Link to="/items/:id">
          <div className={styles.itemProductImageBox}>
            <img src={imgTeste1} alt="" />
          </div>
          <div className={styles.itemProductDescription}>
            <span>$ 1.980</span>
            <h2>Auricular Tws Inalambrico Bluetooth P/ iPhone Moto Samsung</h2>
          </div>
          <div className={styles.itemProductLocation}>
            <span>Capital Federal</span>
          </div>
        </Link>
      </li>
    </ul>
  )
}

export default ItemList
