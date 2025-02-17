import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import Contact from './pages/Contact/Contact';
import styles from './App.module.css';
const App: React.FC = () =>
{
    return (
        <div className={styles.app}>
            <Router >
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </div>

    );
};

export default App;