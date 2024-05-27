import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/Logo.svg';
import Cart from '../../images/Cart.svg';
import { observer } from 'mobx-react-lite';

const Header = observer((props) => {
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
                    <a href='*' className='header__link'>Login</a>
                </div>
                <button className='header__button'>
                    <img src={Cart} alt="Cart" />
                    <div className='header__button-counter'>{props.counter.count}</div>
                </button>
            </div>
        </header>
    );
});

export default Header;

