import React from 'react';
import styles from './NavBar.module.css';

const NavBar: React.FC = () =>
{
    const handleClick = (e: React.MouseEvent, id: string) =>
    {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element)
        {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav id="navbar" className={styles.navbar}>
            <ul>
                <li><a href="#home" onClick={(e) => handleClick(e, 'home')}>Inicio</a></li>
                <li><a href="#about" onClick={(e) => handleClick(e, 'about')}>Sobre Nosotros</a></li>
                <li><a href="#services" onClick={(e) => handleClick(e, 'services')}>Servicios</a></li>
                <li><a href="#products" onClick={(e) => handleClick(e, 'products')}>Productos</a></li>
                <li><a href="#contact" onClick={(e) => handleClick(e, 'contact')}>Contacto</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;