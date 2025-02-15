
import React from 'react';
import styles from './Home.module.css';

const Home: React.FC = () =>
{
    return (
        <section id="home" className={styles.home}>
            <h2>Inicio</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </section>
    );
};

export default Home;