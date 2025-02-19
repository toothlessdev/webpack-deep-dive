import dog from "../assets/dog.jpeg";

export function ImageComponent(src) {
    const image = new Image();
    image.src = src;
}

document.body.appendChild(ImageComponent(dog));
