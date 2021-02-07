import React from 'react';
import './Listitem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';


function Listitem(props){
    const items = props.items;
    const listitem = items.map((item) =>
        {
            return <div className="list" key={item.key}>
                  <p>
            <input type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/>
                <span>
       
       <FontAwesomeIcon className="faicons" onClick={() => {
           props.deleteItem(item.key)
       }} icon="trash" />
       </span>
    </p>
                
            </div>
        }); 
        return <div>
        <FlipMove duration={300} easing="ease-in-out">
        {listitem}
        </FlipMove>
    
    </div>;
}

export default Listitem;