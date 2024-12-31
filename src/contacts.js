import CreateNewDiv from "./divCreator";
import image from "./map"

export function aboutUs(parent) {
    let mapImage = new CreateNewDiv()
        .addClass('mapImage')
        .addClass('flex')
        .appendDiv(parent)
    const mapPicture = new Image();
    mapPicture.src = image;
    parent.appendChild(mapPicture);
}