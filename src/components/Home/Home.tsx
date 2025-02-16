import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';

const Home: React.FC = () =>
{
    const [navbarHeight, setNavbarHeight] = useState<number>(0);

    useEffect(() =>
    {
        // Obtener la altura de la NavBar
        const navbar = document.getElementById('navbar');
        if (navbar)
        {
            setNavbarHeight(navbar.offsetHeight);
        }
    }, []);

    return (
        <section
            id="home"
            className={styles.home}
            style={{ marginTop: `${navbarHeight}px` }} // Aplicar la altura como margen
        >
            <h2>Inicio</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </section>
    );
};

export default Home;