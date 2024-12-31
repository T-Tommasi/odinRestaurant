import CreateNewDiv from "./divCreator";
import image from "./map"

export function aboutUs(parent) {
    function addImage(image, parent) {
        let mapImage = new CreateNewDiv()
            .addClass('mapImage')
            .addClass('flex')
            .appendDiv(parent);
        const mapPicture = new Image();
        mapPicture.src = image;
        parent.appendChild(mapPicture);
    }

    function addLocation(parent) {
        let locationDetailsDiv = new CreateNewDiv()
            .addClass('flex')
            .addClass('location')
            .addContent('<p>You can find us at:</p><ul><li>Totally existent central HQ, 123 mountain avenue, nowhere</li><li>Another branch, 123 Sea aveue, somewhere</li><li>Yet another one, 123 Plains road, everywhere</li>')
            .appendDiv(parent);
    }

    function addForm(parent) {
        let contactForm = new CreateNewDiv()
            .addClass('contactForm')
            .addClass('flex')
            .addContent('<form class="flex"><div><label for="name">Name:</label><input type="text" id="name"></div><div><label for="reason">Message:</label><input type="text" id="reason"></form>')
            .appendDiv(parent);
    }

    addImage(image, parent);
    addLocation(parent);
    addForm(parent);
}