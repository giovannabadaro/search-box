import React from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

const ItemList = ({ itemsList }) => {
  const { categories, items } = itemsList
  return (
    <ul>
      {items?.map((item) => (
        <li key={item.id} className={styles.itemContent}>
          <Link
            to={{
              pathname: `/items/${item.id}`,
              state: categories,
            }}
          >
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
