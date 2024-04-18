import React from 'react';
import './styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import state, {getTotalItems, updateTotalItems} from "./redux/State";
import { createRoot } from 'react-dom/client';


export let renderEntireTree = () => {
    createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <BrowserRouter>
                <App getTotalItems = {getTotalItems} updateTotalItems = {updateTotalItems}  state ={state} />
            </BrowserRouter>
        </React.StrictMode>
    );
}

