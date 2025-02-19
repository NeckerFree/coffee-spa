import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar: React.FC = () =>
{
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () =>
    {
        setIsOpen(!isOpen);
    };

    const closeMenu = () =>
    {
        setIsOpen(false);
    };

    return (
        <nav className={styles.navbar} id="navbar">
            <div className={styles.navbarBrand}>
                <button onClick={toggleMenu} className={styles.navbarToggle}>
                    ☰
                </button>
            </div>
            <ul className={`${styles.navbarLinks} ${isOpen ? styles.navbarLinksActive : ''}`}>
                <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
                <li><Link to="/products" onClick={closeMenu}>Products</Link></li>
                <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;