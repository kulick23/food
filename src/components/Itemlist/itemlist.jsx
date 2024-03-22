import React from 'react';

const Itemlist = () => {
    const words = ["One", "Two", "Three"];

    return (
        <ul>
            {words.map((word, index) => (
                <li key={index}>{word}</li>
            ))}
        </ul>
    );
};

export default Itemlist;
