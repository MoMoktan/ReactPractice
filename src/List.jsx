import React from 'react'

const List = () => {

    const fruits = [
        { name: 'abc', id: 99 },
        { name: 'xyz', id: 19 },
        { name: 'wtf', id: 29 },
        { name: 'jkl', id: 89 }
    ];

    const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}</li>);
    
    return (
        <ul>{listItems}</ul>
    );
}

export default List;

