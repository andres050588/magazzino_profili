import React from 'react';
import ListItem from './ListItem';
import profili from './Data';

function singleItem(item){
    return <ListItem 
        name={item.name} 
        quantity={item.quantity}
        id={item.id}
    />
}
function MainList(){
    return (
        <div className='wrapper'>
            <ul className='mainList'>
                <li>{profili.map(singleItem)}</li>
            </ul>
        </div>
    )
}

export default MainList;