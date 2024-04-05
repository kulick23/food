import bacon from '../images/bacon.png'
import cali from '../images/cali.png'
import classic from '../images/classic.png'
import dreams from '../images/dreams.png'
import spicy from '../images/spicy.png'
import waldo from '../images/waldo.png'

let state = {
    MenuPage:{
        burgers:[
            { id:0, name: 'Burger Dreams', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', price: 9.20, img: dreams},
            { id:1, name: 'Burger Waldo', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', price: 10.00,  img: waldo},
            { id:2, name: 'Burger Cali', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', price: 8.00,  img: cali},
            { id:3, name: 'Burger Bacon Buddy', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', price: 9.99,  img: bacon},
            { id:4, name: 'Burger Spicy', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', price: 9.20,  img: spicy},
            { id:5, name: 'Burger Classic', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', price: 8.00,  img: classic}
        ]
    },

}


export default state