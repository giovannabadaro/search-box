import React from 'react'

import WhitePaper from '../../components/WhitePaper'
import BreadCrumb from '../../components/BreadCrumb'
import ProductDetail from '../../components/ProductDetail'

const ProductDescriptionPage = () => {
  return (
    <>
      <BreadCrumb />
      <WhitePaper>
        <ProductDetail />
      </WhitePaper>
    </>
  )
}
export default ProductDescriptionPage
