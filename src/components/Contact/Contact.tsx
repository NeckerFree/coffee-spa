
import React from 'react';
import styles from './Contact.module.css';

const Contact: React.FC = () =>
{
    return (
        <section id="contact" className={styles.contact}>
            <h2>Contacto</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </section>
    );
};

export default Contact;