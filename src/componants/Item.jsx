import React from "react";
import Date from "./Date";

export default function  Item (props) {

    return (
        <div className="item">
            <div className="item_name" >Pokemon: {props.name}</div>
            <img className="item_img" src={props.image} alt={props.name} />
            <Date
                date={props.date}
                />
        </div>
    )
}