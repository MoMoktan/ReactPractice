import React from 'react'

const List = () => {

    const fruits = [
        { name: 'banana', id: 99, calories: 122 },
        { name: 'apple', id: 19 ,calories: 33},
        { name: 'pineapple', id: 29, calories: 12 },
        { name: 'berries', id: 89 , calories: 22}
    ];


    // fruits.sort((a,b)=> a.name.localeCompare(b.name));
    // fruits.sort((a,b)=> a.calories - b.calories)

    //////////////////////////////////////////////////////////////////////////////

    const localFruits = fruits.filter(fruit => fruit.calories <100);



    const lowcalItems = localFruits.map ( localFruit => ( <li key={localFruit.id} > 



     {localFruit.name } {localFruit.calories}</li>
    
    ));

///////////////////////////////////////////////////////////////////////
const highcalfrutis = fruits.filter(fruit => fruit.calories >=100);


const highcalItems = highcalfrutis.map(highcalfruit => (

    <li key={highcalfruit.id}>
        {highcalfruit.name}
        {highcalfruit.calories}
    </li>
))


//////////////////////////////////////////////////////////////////////////////////////////////////
    const listItems = fruits.map(fruit => 
   
    <li key={fruit.id}>{fruit.name} {fruit.calories } 'calories'</li>);
  ///////////////////////////////////////////////////////////////////  




    return (
        <> 
    
        <ul> {highcalItems} </ul>
         <ul>{lowcalItems}</ul>
        <ul>{listItems}</ul>
       
        </>
       
    );
}

export default List;


