import React from 'react';
import './styles/index.css';
import { Route, Routes } from 'react-router-dom';
import { DataStoreProvider } from "./store/menu_context";
import Header from "./components/Header/Header";
import Menu from "./components/MenuPage/Menu";
import Home from "./components/HomePage/Home";
import Login from "./components/LoginPage/Login";
import Footer from "./components/Footer/Footer";
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './components/AuthProvider';

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header counter={props.counter} />
            <div className='app-wrapper-content'>
                <AuthProvider>
                    <DataStoreProvider>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/menu" element={<Menu counter={props.counter} />}/>
                            <Route path="/login" element={<Login />} />
                        </Routes>
                    </DataStoreProvider>
                </AuthProvider>
            </div>
            <Footer />
        </div>
    );
}

export default App;


