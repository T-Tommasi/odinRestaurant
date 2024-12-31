import './style.css';
import { HomePage } from './homepage';

console.log('the JS file has been loaded succesfully')

//create the heading

function websiteLoader()  {
    let container = document.querySelector('.content');
    console.log(container);
    HomePage(container);

    function appendListener(origin,result) {
        origin.addEventListener('click', result);
    }

    function cleanseDOM() {
        const CONTAINER = document.querySelector('.content');
        while (CONTAINER.firstChild) {
            CONTAINER.removeChild(CONTAINER.lastChild);
        }
        console.log('------');
        console.log('DOM cleaned')
    }

    function pageLoader(buttonList) {

    }
}
websiteLoader()