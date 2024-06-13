// components/CartPage/CartPage.tsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { clearCart } from '../../store/cartSlice';
import './Cart.css';

const Cart: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity);
    const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="cart-page">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul className="cart-items">
                        {cartItems.map(item => (
                            <li key={item.id} className="cart-item">
                                <div className="cart-item-image-container">
                                    <img src={item.img} alt={item.name} className="cart-item-image" />
                                </div>
                                <div className="cart-item-details">
                                    <h3>{item.name}</h3>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Price: ${item.price}</p>
                                </div>
                                <div className="cart-item-total">
                                    <p>Total: ${item.quantity * item.price}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-summary">
                        <p>Total Items: {totalQuantity}</p>
                        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
                        <button onClick={handleClearCart}>Clear Cart</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
