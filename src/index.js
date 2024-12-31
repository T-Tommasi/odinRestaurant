import './style.css';
import { HomePage } from './homepage';
import { MenuPage } from './menu';
import { aboutUs } from './contacts';

console.log('the JS file has been loaded succesfully');

//create the heading

function websiteLoader()  {
    const CONTAINER = document.querySelector('.content');
    console.log(CONTAINER);

    function appendListener(origin,result) {
        origin.addEventListener('click', result);
    }

    function cleanseDOM() {
        const CONTAINER = document.querySelector('.content');
        while (CONTAINER.firstChild) {
            CONTAINER.removeChild(CONTAINER.lastChild);
        };
        console.log('------');
        console.log('DOM cleaned');
    }

    function pageLoader() {
        const BUTTONS = document.querySelectorAll('button');
        for (let button of BUTTONS) {
            switch(button.textContent) {
                case 'Home':
                    appendListener(button, () => {
                        cleanseDOM();
                        HomePage(CONTAINER);
                    });
                    break;
                case 'Menu':
                    appendListener(button, () => {
                        cleanseDOM();
                        MenuPage(CONTAINER);
                    });
                    break;
                case 'About us':
                    appendListener(button, () => {
                        cleanseDOM();
                        aboutUs(CONTAINER);
                    });
                    break;
            }
        }
    }

    HomePage(CONTAINER);
    pageLoader();
}
websiteLoader();