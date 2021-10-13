import api from '../api'

const getProductDescription = async (id) => {
  try {
    const data = await api.get(`/items/${id}`)
    return data
  } catch (error) {
    return {
      data: error?.response?.data,
      status: error?.status,
    }
  }
}

export default getProductDescription
