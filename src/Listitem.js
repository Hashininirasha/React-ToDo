import React from 'react';
import './Listitem.css'

function Listitem(props){
    const items = props.items;
    const listitem = items.map((item) =>
        {
            return <div className="list" key={item.key}>
                <p>{item.text}</p>
            </div>
        });
    return(
        <div>{listitem}</div>
    )
}

export default Listitem;