import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import getProductList from '../../utils/GetProductList'

import logoSM from '../../assets/images/logo-sm.png'
import searchIcon from '../../assets/images/search-icon.svg'
import styles from './styles.module.scss'

const Header = () => {
  const history = useHistory()
  const [query, setQuery] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
    history.push(`/items?search=${query}`)
  }
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerBounds}>
        <Link to="/">
          <img src={logoSM} alt="Mercado Libre" />
        </Link>
        <form onSubmit={handleSubmit}>
          <input
            aria-label="Ingresá lo que quieras encontrar"
            type="text"
            placeholder="Nunca dejes de buscar"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button aria-label="Buscar" type="submit">
            <img src={searchIcon} alt="" />
          </button>
        </form>
      </div>
    </header>
  )
}

export default Header
