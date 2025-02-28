import React from 'react';

function DessertList({data}) {
    // Helper function to convert price string to number
    const getPrice = (priceStr) => parseFloat(priceStr.replace('$', ''));

    const cheapItems = data
        .filter(dessert => getPrice(dessert.price) < 5)
        .sort((a, b) => getPrice(a.price) - getPrice(b.price));

    const dessertList2 = cheapItems.map(dessert => (
        <li key={dessert.id} >
            {dessert.title} - {dessert.price}
        </li>
    ));

    return (
        <ul>
            {dessertList2}
        </ul>
    );
}

export default DessertList;