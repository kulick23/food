import React from 'react';
import './styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import counter from "./store/counter";
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error('Root element not found');
}

export const renderEntireTree = () => {
    createRoot(rootElement).render(
        <React.StrictMode>
            <BrowserRouter>
                <App counter={counter} />
    </BrowserRouter>
    </React.StrictMode>
);
};

