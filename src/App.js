import React from 'react';
import './styles/index.css';
import {  Route, Routes } from 'react-router-dom';
import { DataStoreProvider } from "./store/menu_context";
import Header from "./components/Header/Header";
import Menu from "./components/MenuPage/Menu";
import Home from "./components/HomePage/Home";
import Footer from "./components/Footer/Footer";

const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header counter={props.counter} />
                <div className='app-wrapper-content'>
                    <DataStoreProvider>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/menu" element={<Menu counter={props.counter} />} />
                        </Routes>
                    </DataStoreProvider>
                </div>
                <Footer />
            </div>
    );
}

export default App;
