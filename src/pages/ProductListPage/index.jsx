import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import ItemList from '../../components/ItemList'
import WhitePaper from '../../components/WhitePaper'
import BreadCrumb from '../../components/BreadCrumb'
import getProductList from '../../utils/GetProductList'

const ProductListPage = () => {
  const location = useLocation()
  const [itemsList, setItemsList] = useState({ categories: [], items: [] })

  const handleProductList = async () => {
    const queryParams = new URLSearchParams(location.search)
    const query = queryParams.get('search')
    const response = await getProductList(query)
    const {
      data: { categories, items },
    } = response
    if (Object.values(response).length) {
      setItemsList({ categories: categories, items: items })
    }
  }
  useEffect(() => {
    handleProductList()
  }, [])
  return (
    <>
      <BreadCrumb categories={itemsList.categories} />
      <WhitePaper>
        <ItemList items={itemsList.items} />
      </WhitePaper>
    </>
  )
}
export default ProductListPage
