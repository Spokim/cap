import React from "react";
import './Card.css';

const Card = (props) => {

    return (
        <div className='card-container'>
            <img src={props.image} alt={props.name} className='card-image'/>
            <h3 className='card-title'>{props.name}</h3>
            <div className='card-price'>{props.price}</div>
            <h4 className='card-description'>{props.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare lectus elit, 
                a luctus sem mollis sit amet. Donec et nisi auctor, porta ante at, porttitor neque. 
                Morbi lobortis ultricies dictum. Etiam mollis arcu dui, non fringilla quam lacinia vel.</h4>
            <div className='card-link'>Order delivery</div>
        </div>
    )
}
 
export default Card;
