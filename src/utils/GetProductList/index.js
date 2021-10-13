import api from '../api'

const getProductList = async (query) => {
  try {
    const data = await api.get(`/items?q=${query}`)
    return data
  } catch (error) {
    return {
      data: error?.response?.data,
      status: error?.status,
    }
  }
}

export default getProductList
