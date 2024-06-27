import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import Cart from "../components/CartPage/Cart";
import { clearCart, updateCartItemQuantity, removeFromCart } from "../store/cartSlice";

const mockStore = configureStore([]);

describe('Cart Component', () => {
    let store: MockStoreEnhanced;

    beforeEach(() => {
        store = mockStore({
            cart: {
                items: [
                    { id: '1', name: 'Item 1', quantity: 2, price: 10, img: 'img1.png' },
                    { id: '2', name: 'Item 2', quantity: 1, price: 20, img: 'img2.png' }
                ],
                totalQuantity: 3,
                totalAmount: 40
            }
        });
        store.dispatch = jest.fn();
    });

    test('renders cart items', () => {
        render(
            <Provider store={store}>
                <Cart />
            </Provider>
        );

        expect(screen.getByText('Finish your order')).toBeInTheDocument();
        expect(screen.getByText('Item 1')).toBeInTheDocument();
        expect(screen.getByText('Item 2')).toBeInTheDocument();
    });

    test('clears the cart', () => {
        render(
            <Provider store={store}>
                <Cart />
            </Provider>
        );

        fireEvent.click(screen.getByText('Clear Cart'));
        expect(store.dispatch).toHaveBeenCalledWith(clearCart());
    });

    test('updates item quantity', () => {
        render(
            <Provider store={store}>
                <Cart />
            </Provider>
        );

        fireEvent.change(screen.getAllByRole('spinbutton')[0], { target: { value: '3' } });
        expect(store.dispatch).toHaveBeenCalledWith(updateCartItemQuantity({ id: '1', quantity: 3 }));
    });

    test('removes an item from the cart', () => {
        render(
            <Provider store={store}>
                <Cart />
            </Provider>
        );

        fireEvent.click(screen.getAllByText('✖')[0]);
        expect(store.dispatch).toHaveBeenCalledWith(removeFromCart('1'));
    });
});
