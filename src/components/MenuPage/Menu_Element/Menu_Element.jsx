import React from 'react';
import './Menu_Element.css'


const MenuElement = (props) => {

    return (
        <div className='menuelement'>
            <img src={props.img}/>
            <div className='menuelement__textblock'>
                <div className='menuelement__text'>
                <h3>{props.name}</h3>
                <p> &#36; {Number(props.price).toFixed(2)} USD</p>
                </div>
                <p>{props.desc}</p>
                <div className='menuelement__buttons'>
                    <input type="number"/>
                    <button>Add to card</button>
                </div>

            </div>


        </div>
    )
}

export default MenuElement