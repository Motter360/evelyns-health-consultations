import React from "react";
import exampleData from "@/data/productsData"
import { ImageSliderCard } from "@/components/ItemCard/ItemCard";


function GenerateProductCards(){

    console.log(exampleData.images[0])

    return(
        <div>
            <ImageSliderCard 
                title= {exampleData.title}
                description= {exampleData.description}
                images= {exampleData.images}
            />
        </div>
    )
}

export default function Body(){
    return(
        <div>
            <GenerateProductCards />
        </div>
    )
}