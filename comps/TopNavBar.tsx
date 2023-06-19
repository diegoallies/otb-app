import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/TopNavBar.module.css';
import { useRouter } from '../node_modules/next/router';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state for login status
  const router = useRouter(); // New router for navigation on logout

  useEffect(() => {
    // Check localStorage for user info on component mount
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user); // Convert to boolean and set state
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('user'); // Remove user from localStorage on logout
    setIsLoggedIn(false); // Set login state to false
    router.push('/loginForm'); // Navigate to login page
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
            <Link href="/Explore">
              <a>Explore</a>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/create">
              <a>Create</a>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/challenge">
              <a>Challenge</a>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/profile">
              <a>Profile</a>
            </Link>
          </li>
          {isLoggedIn ? (
          <li className={styles.menuItem} onClick={handleLogout}>
            <a>Logout</a>
          </li>
        ) : (
          <li className={styles.menuItem}>
            <Link href="/loginForm">
              <a>Login</a>
            </Link>
          </li>
        )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
