import React from "react";
import ItemCard from "@/components/itemCard.tsx/page";
import { itemCardProps } from "@/components/itemCard.tsx/page";


const exampleProduct: itemCardProps = {
    name: "Anamu",
    description: "A green pill",
    price: "14.99",
    img: "SomeUrl",
    alt: "A bottle of Pills",
    key: 1,
}

const exampleArray = [exampleProduct]

function GenerateProductCards(){
    return(
        <div>
            {exampleArray.map((item) => <ItemCard 
                name={item.name}
                description={item.description}
                price={item.price}
                img={item.img}
                alt={item.alt}
                key={item.key}
            />)}
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