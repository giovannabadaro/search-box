import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import ItemList from '../../components/ItemList'
import WhitePaper from '../../components/WhitePaper'
import BreadCrumb from '../../components/BreadCrumb'
import getProductList from '../../utils/GetProductList'
import Error from '../../components/Error'

const ProductListPage = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const query = queryParams.get('search')
  const [itemsList, setItemsList] = useState({ categories: [], items: [] })
  const [notFound, setNotFound] = useState(false)

  const handleProductList = async () => {
    const response = await getProductList(query)

    const {
      data: { categories, items },
    } = response

    if (Object.values(response.data.items).length) {
      setItemsList({ categories: categories, items: items })
      setNotFound(false)
    } else {
      setNotFound(true)
    }
  }
  useEffect(() => {
    handleProductList()
  }, [query])

  return !notFound ? (
    <>
      <BreadCrumb categories={itemsList.categories} />
      <WhitePaper>
        <ItemList itemsList={itemsList} />
      </WhitePaper>
    </>
  ) : (
    <Error message="No encontrado!" />
  )
}
export default ProductListPage
