
import React from 'react';
import styles from './Contact.module.css';
import LoremIpsum from 'react-lorem-ipsum';

const Contact: React.FC = () =>
{
    return (
        <section id="contact" className={styles.contact}>
            <h2>Contacto</h2>
            <LoremIpsum p={4} />
        </section>
    );
};

export default Contact;