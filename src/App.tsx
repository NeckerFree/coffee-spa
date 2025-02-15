import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Products from './components/Products/Products';
import Contact from './components/Contact/Contact';
import styles from './App.module.css';

const App: React.FC = () =>
{
    return (
        <div className={styles.app}>
            <img src="/coffee-plant.jpg" alt="Mata de café" className={styles.banner} />
            <NavBar />
            <Home />
            <About />
            <Services />
            <Products />
            <Contact />
        </div>
    );
};

export default App;