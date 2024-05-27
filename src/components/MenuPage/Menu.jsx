import React, { useState, useEffect, useContext } from 'react';
import './Menu.css';
import MenuElement from './Menu_Element/Menu_Element';
import { observer } from "mobx-react-lite";
import DataStoreContext from "../../store/menu_context";

const Menu = observer(({ counter }) => {
    const DataStore = useContext(DataStoreContext);
    const [showPhoneNumber, setShowPhoneNumber] = useState(false);
    const [visible, setVisible] = useState(6);
    const [activeCategory, setActiveCategory] = useState("Dinner");

    useEffect(() => {
        DataStore.fetchData();
    }, [DataStore]);

    const handleSeeMore = () => {
        setVisible(prevVisible => prevVisible + 6);
    };

    const handlePhoneHover = () => {
        setShowPhoneNumber(true);
    };

    const handlePhoneLeave = () => {
        setShowPhoneNumber(false);
    };

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        setVisible(6);
    };

    const filteredItems = activeCategory
        ? DataStore.data.filter(item => item.category === activeCategory)
        : DataStore.data;

    const MenuItems = filteredItems
        .slice(0, visible)
        .map((item) => (
            <MenuElement
                key={item.id}
                name={item.name}
                desc={item.desc}
                price={item.price}
                img={item.img}
                counter={counter}
            />
        ));

    const getCategoryButtonClass = (category) => {
        return activeCategory === category ? '' : 'menu__buttons--button';
    };

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
                <button className={getCategoryButtonClass('Dessert')} onClick={() => handleCategoryClick('Dessert')}>Dessert</button>
                <button className={getCategoryButtonClass('Dinner')} onClick={() => handleCategoryClick('Dinner')}>Dinner</button>
                <button className={getCategoryButtonClass('Breakfast')} onClick={() => handleCategoryClick('Breakfast')}>Breakfast</button>
            </div>
            <div className='menu__elements'>{MenuItems}</div>
            {filteredItems.length > visible && (
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
});

export default Menu;
