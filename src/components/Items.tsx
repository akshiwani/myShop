import React from "react";
import './Items.css';
import { Link } from "react-router-dom";

const Items = (props: any) => {
    return (
        <div className="item">
            <Link to={`/product/${props.id}`}><img src={props.image} alt='item image' /></Link>
            <p>{props.name}</p> 
            <div className="itemPrice">
                <div className="itemPriceNew">
                ${props.new_price}
                </div>   
                <div className="itemPriceOld">
                ${props.old_price}
                </div> 
            </div>
        </div>
    )
}

export default Items;