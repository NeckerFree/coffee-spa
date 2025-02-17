
import React from 'react';
import styles from './Products.module.css';
import LoremIpsum from 'react-lorem-ipsum';

const Products: React.FC = () =>
{
    return (
        <section id="products" className={styles.products}>
            <h2>Productos</h2>
            <LoremIpsum p={6} />
        </section>
    );
};

export default Products;