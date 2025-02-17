
import React from 'react';
import styles from './About.module.css';
import LoremIpsum from 'react-lorem-ipsum'
const About: React.FC = () =>
{
    return (
        <section id="about" className={styles.about}>
            <h2>Sobre Nosotros</h2>
            <LoremIpsum p={3} />
        </section>
    );
};

export default About;