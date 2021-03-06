import React from 'react'

import Button from '../Button'

import styles from './styles.module.scss'
import variables from '../../assets/styles/_variables.scss'

const ProductDetail = ({ item }) => {
  const { picture, condition, sold_quantity, title, price, description } = item
  return (
    <div className={styles.productDetailContainer}>
      <div className={styles.productDetailDescriptionContent}>
        <img src={picture} alt={title} />
        <div className={styles.productDetailBuyContainer}>
          <span>{`${condition || ''} - ${sold_quantity || '0'} vendidos`}</span>
          <h1>{title}</h1>
          <span>{`$ ${price?.amount || ''}`}</span>
          <Button
            type="submit"
            btnColor={variables.blue}
            labelColor={variables.white}
            fontSize={variables.fontSizeEmd}
          >
            Comprar
          </Button>
        </div>
      </div>
      <div className={styles.productDetailDescription}>
        <h2>{description && 'Descripción del producto'}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}
export default ProductDetail
