import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import ItemList from '../../components/ItemList'
import WhitePaper from '../../components/WhitePaper'
import BreadCrumb from '../../components/BreadCrumb'
import getProductList from '../../utils/GetProductList'
import Error from '../../components/Error'
import Loader from '../../components/Loader'

const ProductListPage = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const query = queryParams.get('search')
  const [itemsList, setItemsList] = useState({ categories: [], items: [] })
  const [renderConditional, setRenderConditional] = useState({
    status: 'Loading',
  })

  const handleProductList = async () => {
    const response = await getProductList(query)

    const {
      data: { categories, items },
    } = response

    if (Object.values(response.data.items).length) {
      setItemsList({ categories: categories, items: items })
      setRenderConditional({ status: 'Completed' })
    } else {
      setRenderConditional({ status: 'NotFound' })
    }
  }
  useEffect(() => {
    handleProductList()
  }, [query])

  return (
    <>
      {
        {
          Loading: <Loader />,
          NotFound: <Error message="No encontrado!" />,
          Completed: (
            <>
              <BreadCrumb categories={itemsList.categories} />
              <WhitePaper>
                <ItemList itemsList={itemsList} />
              </WhitePaper>
            </>
          ),
        }[renderConditional.status]
      }
    </>
  )
}
export default ProductListPage
