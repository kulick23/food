import React from 'react';
import './Header.css'
import Logo from '../../images/Logo.svg'
import Cart from '../../images/Cart.svg'
const Header = (props) => {
    return (
    <header className='header'>
        <img className='header__logo' src={Logo}/>
        <div className='header__right'>
        <div className='header__links'>
            <a href={'*'}>Home</a>
            <a href={'*'}>Menu</a>
            <a href={'*'}>Company</a>
            <a href={'*'}>Login</a>
        </div>
        <button className='header__button'>
            <img src={Cart}/>
            <div className='header__button-counter'>{props.getTotalItems()}</div>
        </button>
        </div>
    </header>
    )
}

export default Header;