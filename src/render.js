import React from 'react';
import './styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import counter from "./store/counter"
import { createRoot } from 'react-dom/client';


export let renderEntireTree = () => {
    createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <BrowserRouter>
                <App counter = {counter}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

