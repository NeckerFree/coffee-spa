import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importa tu componente principal App

// Crea el root de tu aplicación
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

// Renderiza tu aplicación envuelta en BrowserRouter
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);