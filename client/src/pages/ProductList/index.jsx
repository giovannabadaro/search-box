import React from 'react'
import ItemList from '../../components/ItemList'
import WhitePaper from '../../components/WhitePaper'
import BreadCrumb from '../../components/BreadCrumb'

const ProductList = () => {
  return (
    <>
      <BreadCrumb />
      <WhitePaper>
        <ItemList />
      </WhitePaper>
    </>
  )
}
export default ProductList
