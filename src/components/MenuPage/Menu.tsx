import React, { useState } from 'react';
import './Menu.css';
import MenuElement from './Menu_Element/Menu_Element';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { addToCart } from '../../store/cartSlice';

const categories = ['Dessert', 'Dinner', 'Breakfast'];


const Menu: React.FC = () => {
    const [showPhoneNumber, setShowPhoneNumber] = useState<boolean>(false);
    const [visible, setVisible] = useState<number>(6);
    const [activeCategory, setActiveCategory] = useState<string>(categories[1]);
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state: RootState) => state.menu);


    const handleSeeMore = () => {
        setVisible(prevVisible => prevVisible + 6);
    };

    const handlePhoneHover = () => {
        setShowPhoneNumber(true);
    };

    const handlePhoneLeave = () => {
        setShowPhoneNumber(false);
    };

    const handleCategoryClick = (category: string) => {
        setActiveCategory(category);
        setVisible(6);
    };

    const filteredItems = items.filter((item) => item.category === activeCategory);

    const updateCart = (item: { id: string, name: string, quantity: number, price: number }) => {
        dispatch(addToCart(item));
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading menu: {error}</p>;


    const MenuItems = filteredItems
        .slice(0, visible)
        .map((item) => (
            <MenuElement
                key={item.id}
                name={item.name}
                desc={item.desc}
                price={item.price}
                img={item.img}
                updateCart={updateCart}
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
                {categories.map((category) => (
                    <button
                        key={category}
                        className={activeCategory === category ? '' : 'menu__buttons--button'}
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </button>
                ))}

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
};

export default Menu;

