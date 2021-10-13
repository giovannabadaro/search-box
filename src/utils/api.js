import axios from 'axios'

const api = axios.create({
  baseURL: 'https://search-box-bff.herokuapp.com/api',
})

export default api
