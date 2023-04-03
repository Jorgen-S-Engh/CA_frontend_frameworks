import React from 'react'
import styles from "./Footer.module.scss";
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className={styles.footer_container}>
      <h5>EasyBuy</h5>
      <p>Est 2023</p>
      <div className={styles.footer_links}>
        <Link to="/">Home</Link>
        <Link to="/productPage">Products</Link>
        <Link to="/contactPage">Contact</Link>
      </div>
    </footer>
  )
}

export default Footer