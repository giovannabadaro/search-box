import React from 'react'

import Button from '../Button'

import styles from './styles.module.scss'
import variables from '../../assets/styles/_variables.scss'

const ProductDetail = ({ item }) => {
  return (
    <div className={styles.productDetailContainer}>
      <div className={styles.productDetailDescriptionContent}>
        <img src={item?.picture} alt="" />
        <div className={styles.productDetailBuyContainer}>
          <span>{`${item?.condition || ''} - ${
            item?.sold_quantity || ''
          } vendidos`}</span>
          <h1>{item?.title}</h1>
          <span>{`$ ${item?.price?.amount || ''}`}</span>
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
        <h2>Descripción del producto</h2>
        <p>{item?.description}</p>
      </div>
    </div>
  )
}
export default ProductDetail
