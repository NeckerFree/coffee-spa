
import React from 'react';
import styles from './Services.module.css';
import LoremIpsum from 'react-lorem-ipsum';

const Services: React.FC = () =>
{
    return (
        <section id="services" className={styles.services}>
            <h2>Servicios</h2>
            <LoremIpsum p={7} />
        </section>
    );
};

export default Services;