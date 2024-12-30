import './style.css';
import { HomePage } from './homepage';

console.log('the JS file has been loaded succesfully')

//create the heading

function websiteLoader()  {
    let container = document.querySelector('.content')
    console.log(container)
    HomePage(container)
}

websiteLoader()