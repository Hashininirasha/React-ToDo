import React from 'react';
import './Listitem.css'

function Listitem(props){
    const items = props.items;
    const Listitem = items.map(items =>
        {
            return <div className="list" key="item.key">
                <p>{items.text}</p>
            </div>
        })
    return(
        <div>{Listitem}</div>
    )
}

export default Listitem;