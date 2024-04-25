import React, { useState } from 'react';
import './Menu.css';
import MenuElement from './Menu_Element/Menu_Element';

const Menu = (props) => {
    const [showPhoneNumber, setShowPhoneNumber] = useState(false);
    const [visibleBurgers, setVisibleBurgers] = useState(6);

    const handleSeeMore = () => {
        setVisibleBurgers(prevVisibleBurgers => prevVisibleBurgers + 6);
    };

    const handlePhoneHover = () => {
        setShowPhoneNumber(true);
    };

    const handlePhoneLeave = () => {
        setShowPhoneNumber(false);
    };

    const dinnerBurgers = props.state.burgers.filter(burger => burger.category === 'Dinner');

    const Burgers = dinnerBurgers
        .slice(0, visibleBurgers)
        .map((burger, index) => (
            <MenuElement
                key={index}
                name={burger.name}
                desc={burger.desc}
                price={burger.price}
                img={burger.img}
                updateTotalItems={props.updateTotalItems}
            />
        ));

    return (
        <div className='menu'>
            <h1>Browse our menu</h1>
            <p>
                Use our menu to place an order online, or{' '}
                <span
                    onMouseEnter={handlePhoneHover}
                    onMouseLeave={handlePhoneLeave}
                >
                    phone
                </span>{' '}
                our store
                <br /> to place a pickup order. Fast and fresh food.
            </p>
            <div className='menu__buttons'>
                <button className='menu__buttons--button'>Desert</button>
                <button>Dinner</button>
                <button className='menu__buttons--button'>Breakfast</button>
            </div>
            <div className='menu__elements'>{Burgers}</div>
            {dinnerBurgers.length > visibleBurgers && (
                <button className='menu__button' onClick={handleSeeMore}>
                    See more
                </button>
            )}
            {showPhoneNumber && (
                <div className='phone-popup'>
                    <p>+3706535678</p>
                </div>
            )}
        </div>
    );
};

export default Menu;
