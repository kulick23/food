import React from 'react';
import './styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';


const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error('Root element not found');
}

export const renderEntireTree = () => {
    createRoot(rootElement).render(
        <React.StrictMode>
            <Provider store={store}>
            <BrowserRouter>
                <App  />
            </BrowserRouter>
            </Provider>
        </React.StrictMode>
    );
};

