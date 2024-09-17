import React, { useState, useRef } from 'react';
import { Link } from 'react-scroll';
import styles from './styling/TopNav.module.css';

const TopNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.topNav}>
      <span className={styles.burger} onClick={toggleMenu} aria-label="Toggle menu">
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </span>
      <ul
        className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}
        ref={menuRef}
      >
        <li>
          <Link to="hero" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
