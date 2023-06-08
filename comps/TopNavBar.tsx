import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/TopNavBar.module.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <a>Own The Blok</a>
        </Link>
      </div>
      <div className={`${styles.navigation} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul className={styles.menuItems}>
          <li className={styles.menuItem}>
            <Link href="/explore">
              <a>Explore</a>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/create">
              <a>Create</a>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/notifications">
              <a>Notifications</a>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/profile">
              <a>Profile</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
