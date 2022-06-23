import React from "react";
import './card.style.css';

export const Card = props =>(

    <div className="card-container" >
        <img src={`https://robohash.org/${props.singer.id}?set=set1&size=150x150`} alt="" />
        <h2 >{props.singer.name}</h2>
        <p>{props.singer.email}</p>
    </div>

)