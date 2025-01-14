// src/components/MyComponent.js
import React from 'react';
import styles from './Navbar.module.scss';
import { Outlet } from 'react-router';

function Navbar() {
  return (
    <>

    <div className={styles.navTop}>
      <h1>Travelify</h1>
      <p>The best FREE travel blog WordPress theme</p>
    </div>
    <div className={styles.navbar}>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="">Download Now!</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="">New York</a></li>
        <li><a href="">New York</a></li>
        <li><a href="">Other</a></li>
        <li><a href="">Other</a></li>
        <li><a href="">WooCommerce</a></li>
        <li><a href="">Contact us</a></li>
      </ul>


    </div>
    <div className={styles.slide}>
    </div>

    <Outlet/>
    </>
  );
}

export default Navbar;
