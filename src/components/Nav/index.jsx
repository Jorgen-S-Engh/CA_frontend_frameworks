import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';
import styles from "./Nav.module.scss"



function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.menu_items}>
        <li><Link className={styles.link} to="/">Home</Link></li>
        <li><Link to="/contactPage">Contact</Link></li>
      </ul>
      <div className={styles.shopping_cart}>
        <div className={styles.shopping_cart__no_items}>1</div>
        <Link to="/checkoutPage"><FaShoppingCart/></Link>
      </div>
    </nav>

  )
}

export default Nav