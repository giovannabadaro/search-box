import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'

import './assets/styles/main.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default App
