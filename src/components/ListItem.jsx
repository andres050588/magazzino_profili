import React from 'react';

function ListItem(props){
    return (
        <div className='listItem'>
            <h2>{props.name} <strong>{props.quantity}</strong></h2>
            
        </div>
    )
}

export default ListItem;