import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import WhitePaper from '../../components/WhitePaper'
import BreadCrumb from '../../components/BreadCrumb'
import ProductDetail from '../../components/ProductDetail'
import Loader from '../../components/Loader'

import getProductDescription from '../../utils/GetProductDescription'

const ProductDescriptionPage = () => {
  const { id } = useParams()
  const [itemDescription, setItemDescription] = useState({ item: {} })
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()
  const { state: categories } = location

  const handleProductList = async () => {
    const response = await getProductDescription(id)
    const {
      data: { item },
    } = response
    if (Object.values(response.data.item).length) {
      setItemDescription({ item: item })
    }
    setIsLoading(false)
  }
  useEffect(() => {
    handleProductList()
  }, [id])
  return isLoading ? (
    <Loader />
  ) : (
    <>
      <BreadCrumb categories={categories} />
      <WhitePaper>
        <ProductDetail item={itemDescription?.item} />
      </WhitePaper>
    </>
  )
}
export default ProductDescriptionPage
