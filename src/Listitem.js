import React from 'react';
import './Listitem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Listitem(props){
    const items = props.items;
    const listitem = items.map((item) =>
        {
            return <div className="list" key={item.key}>
                <p>{item.text}
                <span>
       
                <FontAwesomeIcon className="faicons" icon="trash"/>
                </span>
                </p>
            </div>
        });
    return(
        <div>{listitem}</div>
    )
}

export default Listitem;