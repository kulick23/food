import React, { useEffect } from 'react';
import './styles/index.css';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Menu from "./components/MenuPage/Menu";
import Home from "./components/HomePage/Home";
import Login from "./components/LoginPage/Login";
import Footer from "./components/Footer/Footer";
import { AuthProvider } from './components/AuthProvider';
import { useAppDispatch } from './store/hooks';
import { fetchMenuItems } from './store/menuSlice';



const App: React.FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchMenuItems());
    }, [dispatch]);


    return (
        <div className='app-wrapper'>
            <Header />
            <div className='app-wrapper-content'>
                <AuthProvider>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/menu" element={<Menu />} />
                            <Route path="/login" element={<Login />} />
                        </Routes>
                </AuthProvider>
            </div>
            <Footer />
        </div>
    );
}

export default App;

