import React from 'react'
import { Link } from 'react-router-dom'

import imgTeste1 from '../../assets/images/imgteste1.jpg'
import styles from './styles.module.scss'

const ItemList = ({ items }) => {
  console.log(items)
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} className={styles.itemContent}>
          <Link to="/items/:id">
            <div className={styles.itemProductImageBox}>
              <img src={item.picture} alt="" />
            </div>
            <div className={styles.itemProductDescription}>
              <span>$ {item.price.amount}</span>
              <h2>{item.title}</h2>
            </div>
            <div className={styles.itemProductLocation}>
              <span>Capital Federal</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default ItemList