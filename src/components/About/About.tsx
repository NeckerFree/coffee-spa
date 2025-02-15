
import React from 'react';
import styles from './About.module.css';

const About: React.FC = () =>
{
    return (
        <section id="about" className={styles.about}>
            <h2>Sobre Nosotros</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </section>
    );
};

export default About;