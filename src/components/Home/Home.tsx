import React from 'react';
import styles from './Contact.module.css';
import LoremIpsum from 'react-lorem-ipsum';

const Home: React.FC = () =>
{
    return (
        <section id="contact" className={styles.home}>
            <h2>Home</h2>
            <LoremIpsum p={5} />
        </section>
    );
};

export default Home;