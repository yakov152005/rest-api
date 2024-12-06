import React from "react";
import Date from "./Date";
import Attack from "./Attack";

export default function Item(props) {
    return (
        <div className="item">
            <div className="item_details">
                <div className="item_name"><mark>Number:</mark>{props.number} </div>
                <div className="item_name"><mark>Pokemon:</mark>{props.name}</div>
                <Attack attacks={props.attacks} />
                <Date date={props.date}/>
            </div>
            <img className="item_img" src={props.image} alt={props.name}/>
        </div>
    );
}

