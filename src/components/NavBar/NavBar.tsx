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

    return (
        <nav className={styles.navbar} id="navbar">
            <div className={styles.navbarBrand}>
                <button onClick={toggleMenu} className={styles.navbarToggle}>
                    ☰
                </button>
            </div>
            <ul className={`${styles.navbarLinks} ${isOpen ? styles.navbarLinksActive : ''}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;