import React from 'react';

function Airbnb (props) {
    return (
        <div>
            <img id = "image" src = {props.image} alt = {props.alt} />
            <div id = "stars">
                <img id ="star" src = {props.star} alt = {props.alt} />
            </div>
            <p>{props.review}</p>
            <div id = "review">
                <img id = "profile" src = {props.profile} />
                <div id = "details">
                    <h1 id = "name">{props.name}</h1>
                    <h2 id = "location">{props.location}</h2>
                </div>
            </div>

        </div> 
    )
}

export default Airbnb;