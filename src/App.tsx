
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Frame from './components/Frame/Frame';
import styles from './App.module.css';

const App: React.FC = () =>
{
    return (
        <div className={styles.app}>
            <img src="/coffee-plant.jpg" alt="Mata de café" className={styles.banner} />
            <NavBar />
            <Frame />
        </div>
    );
};

export default App;