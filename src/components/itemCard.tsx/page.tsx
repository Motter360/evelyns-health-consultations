import React from "react";

export interface itemCardProps {
    name: string;
    description: string;
    price: string;
    img: string;
    alt: string;
    key: number;
}

export default function ItemCard(props: itemCardProps){
    return(
        <div>
            <img src={props.img} alt={props.alt} />
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <p>{props.price}</p>
        </div>
    )
}