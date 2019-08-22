import React from 'react';
import './food-types.scss';

const FoodType = (props) => 
    <div className={`menu-container ${props.positionClass}`}>
    <div className="image-container">
        <img src={props.imageUrl}/>
    </div>
    <div className="text-container">
        <p>{props.menuType}</p>
    </div>

    </div>


export default FoodType
