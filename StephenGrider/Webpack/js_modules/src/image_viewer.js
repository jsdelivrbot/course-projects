//import big from '../assets/big.jpeg';
import small from '../assets/small.jpeg';

// This image_viewer only runs, it does not export code,
// so we can just import it this way
// Anything non js needs the extension ....  .css
import '../styles/image_viewer.css';


export default () => {
  // create an html element of type image and assign it to const image
  const image = document.createElement('img');

  // give image a src tag
  //image.src = 'http://lorempixel.com/400/400';
  image.src = small;

  // append image to the DOM
  document.body.appendChild(image);
}

//
// const bigImage = document.createElement('img');
// bigImage.src = big;
//
// document.body.appendChild(bigImage);
