import React, { useState } from 'react';
import './Menu_Element.css';

const MenuElement = (props) => {
    const [quantity, setQuantity] = useState(0);
    const [expanded, setExpanded] = useState(false);


    const increaseQuantity = () => {
        props.updateTotalItems(quantity);
    };

    const handleInputChange = (event) => {
        const value = parseInt(event.target.value);
        setQuantity(isNaN(value) ? 0 : value);
    };


    const toggleDescription = () => {
        setExpanded(!expanded);
    };


    return (
        <div className='menuelement'>
            <img src={props.img} alt={props.name} />
            <div className='menuelement__textblock'>
                <div className='menuelement__text'>
                    <h3>{props.name}</h3>
                    <p> &#36; {Number(props.price).toFixed(2)} USD</p>
                </div>
                <p>
                    {expanded ? props.desc : `${props.desc.split(' ').slice(0, 20).join(' ')}${props.desc.split(' ').length > 20 ? '...' : ''}`}
                    {props.desc.split(' ').length > 20 && (
                        <span className="expand-description" onClick={toggleDescription}>
                            {expanded ? ' Collapse' : ' Expand'}
                        </span>
                    )}
                </p>
                <div className='menuelement__buttons'>
                    <input type="number" value={quantity} onChange={handleInputChange} />
                    <button onClick={increaseQuantity}>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default MenuElement;





