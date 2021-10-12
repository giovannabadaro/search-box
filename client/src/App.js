import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import Main from './components/Main'
import Routes from './Routes'

import './assets/styles/_scaffolding.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes />
      </Main>
    </BrowserRouter>
  )
}

export default App
