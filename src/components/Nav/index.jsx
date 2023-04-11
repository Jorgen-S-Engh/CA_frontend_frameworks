import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './Nav.module.scss';

function Nav() {
  const cartItems = useSelector((state) => state.cart.items);
  const numberOfItems = cartItems.length;

  return (
    <nav className={styles.nav}>
      <ul className={styles.menu_items}>
        <li>
          <Link className={styles.link} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/contactPage">Contact</Link>
        </li>
      </ul>
      <div className={styles.shopping_cart}>
        <div className={styles.shopping_cart__no_items}>{numberOfItems}</div>
        <Link to="/checkoutPage">
          <FaShoppingCart />
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
