import { ImageSliderCardProps } from "./interfaces"
import { Image } from "./interfaces"

const exampleImage: Image[] =[{
    src:"/Large_Bottle.png",
    alt:"Some Alt",
    caption:"Lots of liquid.",
    price:"56.99"
},{
    src:"/Plastic_Bottle.png",
    alt:"Some Alt 1",
    caption:"Green pills.",
    price:"16.99"
},{
    src:"/Small_Bottle_With_Label.png",
    alt:"Some Alt 2",
    caption:"A few drops.",
    price:"16.99"
}]

const exampleProduct: ImageSliderCardProps = {
    title: "Anamu",
    description: "This product serves a purpose",
    images: exampleImage,
}

export default exampleProduct