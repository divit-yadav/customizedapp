import React from 'react';
import DessertList from './DessertList';

const desserts = [
    {
        id: "1",
        title: "Tiramisu",
        description: "The best tiramisu in town",
        image: "https://picsum.photos/200/300/?random",
        price: "$5.00"
    },
    {
        id: "2",
        title: "Lemon Ice Cream",
        description: "Mind blowing taste",
        image: "https://picsum.photos/200/300/?random",
        price: "$4.50"
    },
    {
        id: "3",
        title: "Chocolate mousse",
        description: "Unexplored flavour",
        image: "https://picsum.photos/200/300/?random",
        price: "$6.00"
    }
];

function Styles() {
    /* const listItems = desserts.map((dessert) => (
        <li 
            key={dessert.id}
        >
            <h3>{dessert.title}</h3>
            <p>{dessert.description}</p>
            <p style={{ fontWeight: 'bold' }}>{dessert.price}</p>
        </li>
    )); */

    return (
        <div className="App">
            <h1>Welcome to Styles</h1>
            <ul>
                <DessertList data={desserts} />
            </ul>
        </div>
    );
}

export default Styles;
