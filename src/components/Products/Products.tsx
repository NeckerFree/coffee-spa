
import React from 'react';
import styles from './Products.module.css';

const Products: React.FC = () =>
{
    return (
        <section id="products" className={styles.products}>
            <h2>Productos</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </section>
    );
};

export default Products;