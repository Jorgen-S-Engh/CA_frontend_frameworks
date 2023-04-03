import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Nav.module.scss"

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.menu_items}>
        <li><Link className={styles.link} to="/">Home</Link></li>
        <li><Link to="/productPage">Products</Link></li>
        <li><Link to="/contactPage">Contact</Link></li>

      </ul>
    </nav>

  )
}

export default Nav