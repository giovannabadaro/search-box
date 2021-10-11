import React from 'react'
import { Link } from 'react-router-dom'

import logoSM from '../../assets/images/logo-sm.png'
import searchIcon from '../../assets/images/search-icon.svg'
import styles from './styles.module.scss'

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerBounds}>
        <Link to="/" activeClassName="current">
          <img src={logoSM} alt="" />
        </Link>
        <form>
          <input type="text" placeholder="Nunca dejes de buscar" />
          <button>
            <img src={searchIcon} alt="" />
          </button>
        </form>
      </div>
    </header>
  )
}

export default Header
