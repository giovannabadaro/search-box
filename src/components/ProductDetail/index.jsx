import React from 'react'

import Button from '../Button'

import imgTeste1 from '../../assets/images/imgteste1.jpg'
import styles from './styles.module.scss'
import variables from '../../assets/styles/_variables.scss'

const ProductDetail = () => {
  return (
    <div className={styles.productDetailContainer}>
      <div className={styles.productDetailDescriptionContent}>
        <img src={imgTeste1} alt="" />
        <div className={styles.productDetailBuyContainer}>
          <span>Nuevo - 234 - vendidos</span>
          <h1>Auricular Tws Inalambrico Bluetooth P/ iPhone Moto Samsung</h1>
          <span>$ 1.980</span>
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
        <p>
          Lorem ipsum dolor sit amet. Est sunt dicta sit consequatur alias eos
          internos obcaecati ut necessitatibus assumenda et sunt ratione est
          nostrum ipsum. Et nemo iste ut Quis maxime ab ratione aliquid sed
          dolorem corrupti et assumenda pariatur. Vel quia iste et enim dolor
          qui neque voluptate ex omnis consectetur qui ipsa quidem est quidem
          laudantium sit eligendi illum. Et itaque laborum et rerum voluptas vel
          aliquam iste?
        </p>
      </div>
    </div>
  )
}
export default ProductDetail
