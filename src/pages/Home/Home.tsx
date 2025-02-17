import React from 'react';
import styles from './Home.module.css';
import LoremIpsum from 'react-lorem-ipsum';

const Home: React.FC = () =>
{
    return (
        <section id="home" className={styles.home}>
            <h2>Home</h2>
            <img src="coffee-plant.jpg" alt="Mata de café" className={styles.banner} />
            <LoremIpsum p={5} />
        </section>
    );
};

export default Home;


