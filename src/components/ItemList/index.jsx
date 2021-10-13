import React from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'
import freeShipping from '../../assets/images/free_shipping.png'
import Loader from '../Loader'

const ItemList = ({ itemsList }) => {
  const { categories, items } = itemsList
  return !!itemsList ? (
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
              <div>
                <span>$ {item.price.amount}</span>
                {item.free_shipping && <img src={freeShipping}></img>}
              </div>
              <h2>{item.title}</h2>
            </div>
            <div className={styles.itemProductLocation}>
              <span>Capital Federal</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  ) : (
    <Loader />
  )
}

export default ItemList
