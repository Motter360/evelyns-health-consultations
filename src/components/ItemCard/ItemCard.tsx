import React from "react";
import { ImageSliderCardProps } from "@/data/interfaces";

export function ImageSliderCard(props: ImageSliderCardProps) {
    return(
        <div>
            {props.images.map((image) => 
            <div key={image.src}>
                <img src={image.src} alt={image.alt} className="w-10"/>
                <p>{image.price}</p>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </div>)}
        </div>
    )
}/* 
        All of the hard coding will live in one folder,
        the data folder, this will make it easier to update 
        and more compatable with a future CMS. All froducts should live in a producst page, for example.

        for next JS:
            Only import hardcoded data into page components, not components dirrectly.
*/