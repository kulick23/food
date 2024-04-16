import React, { useState } from 'react';
import './Menu.css';
import MenuElement from "./Menu_Element/Menu_Element";

const Menu = (props) => {
    const [showPhoneNumber, setShowPhoneNumber] = useState(false);

    let Burgers = props.state.burgers.map(burger => (
        <MenuElement
            name={burger.name}
            desc={burger.desc}
            price={burger.price}
            img={burger.img}
        />
    ));

    const handlePhoneHover = () => {
        setShowPhoneNumber(true);
    };

    const handlePhoneLeave = () => {
        setShowPhoneNumber(false);
    };

    return (
        <div className='menu'>
            <h1>Browse our menu</h1>
            <p>
                Use our menu to place an order online, or{" "}
                <span
                    onMouseEnter={handlePhoneHover}
                    onMouseLeave={handlePhoneLeave}
                >
                    phone
                </span>{" "}
                our store
                <br /> to place a pickup order. Fast and fresh food.
            </p>
            <div className='menu__buttons'>
                <button>Desert</button>
                <button className='menu__buttons--button'>Dinner</button>
                <button className='menu__buttons--button'>Breakfast</button>
            </div>
            <div className='menu__elements'>{Burgers}</div>
            <button className='menu__button'>See more</button>
            {showPhoneNumber && (
                <div className='phone-popup'>
                    <p>+3706535678</p>
                </div>
            )}
        </div>
    );
};

export default Menu;
