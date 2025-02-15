
import React from 'react';
import styles from './NavBar.module.css';

const NavBar: React.FC = () =>
{
    return (
        <nav className={styles.navbar}>
            <ul>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#about">Sobre Nosotros</a></li>
                <li><a href="#services">Servicios</a></li>
                <li><a href="#products">Productos</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;