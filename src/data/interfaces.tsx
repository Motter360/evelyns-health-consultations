export interface ImageSliderCardProps {
    title: string;
    description: string;
    images: Image[];
}

export interface Image {
    src: string;
    alt: string;
    caption: string;
    price: string;
}