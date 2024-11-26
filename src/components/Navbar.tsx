import React from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles['navbar-container']}>
        <div className={styles['navbar-logo']}>Hussain</div>
        <div className={styles['navbar-links']}>
          <a href="#home" className={styles['navbar-link']}>
            Home
          </a>
          <a href="#about" className={styles['navbar-link']}>
            About
          </a>
          <a href="#projects" className={styles['navbar-link']}>
            Projects
          </a>
          <a href="#skills" className={styles['navbar-link']}>
            Skills
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
