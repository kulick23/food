import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/Logo.svg';
import Cart from '../../images/Cart.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Header: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.totalQuantity);
    return (
        <header className='header'>
            <img className='header__logo' src={Logo} alt="Logo" />
            <div className='header__right'>
                <div className='header__links'>
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) => isActive ? 'header__link header__link--active' : 'header__link'}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/menu"
                        className={({ isActive }) => isActive ? 'header__link header__link--active' : 'header__link'}
                    >
                        Menu
                    </NavLink>
                    <a href='*' className='header__link'>Company</a>
                    <NavLink
                        to="/login"
                        className={({ isActive }) => isActive ? 'header__link header__link--active' : 'header__link'}
                    >
                        Login
                    </NavLink>
                </div>
                <NavLink to="/cart">
                    <button className='header__button'>
                        <img src={Cart} alt="Cart" />
                        <div className='header__button-counter'>{cartItems}</div>
                    </button>
                </NavLink>
            </div>
        </header>
    );
};

export default Header;
