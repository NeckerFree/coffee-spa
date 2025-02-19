

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import Contact from './pages/Contact/Contact';
import RedirectHandler from './components/RedirectHandler';

const App: React.FC = () =>
{
    return (
        <BrowserRouter basename="/coffee-spa">
            <RedirectHandler />
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;