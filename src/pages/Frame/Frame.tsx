
import React from 'react';
import styles from './Frame/Frame.module.css';

const Frame: React.FC = () =>
{
    return (
        <div className={styles.frame}>
            <h2>Bienvenido a nuestra plantación de café</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    );
};

export default Frame;