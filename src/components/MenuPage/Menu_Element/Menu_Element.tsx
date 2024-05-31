import React, { useState, ChangeEvent } from 'react';
import './Menu_Element.css';

interface MenuElementProps {
    img: string;
    name: string;
    price: number;
    desc: string;
    counter: {
        UpdateCounter: (quantity: number) => void;
    };
}

const MenuElement: React.FC<MenuElementProps> = (props) => {
    const [quantity, setQuantity] = useState<number>(0);
    const [expanded, setExpanded] = useState<boolean>(false);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
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
                    <p> &#36; {props.price.toFixed(2)} USD</p>
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
                    <button onClick={() => props.counter.UpdateCounter(quantity)}>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default MenuElement;



