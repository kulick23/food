import React from 'react';
import './styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import  state from "./redux/State";
import { createRoot } from 'react-dom/client';


export let renderEntireTree = () => {
    createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <BrowserRouter>
                <App  state ={state} />
            </BrowserRouter>
        </React.StrictMode>
    );
}

