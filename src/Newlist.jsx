import React from 'react'


const Newlist = (props) => {
   
const itemlist = props.items;

const ListItems = itemlist.map (fruit => 
    

    (
        <li key={fruit.id}>

            {fruit.name}
            {fruit.calories}
        </li>
    )
    )

  return (
    <div>
      {ListItems}
    </div>
  )
}

export default Newlist

