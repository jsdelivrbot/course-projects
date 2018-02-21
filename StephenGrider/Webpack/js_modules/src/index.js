// CommonJS way
//const sum = require('./sum');

//ES6 Way
// import sum from './sum';
// // This image_viewer only runs, it does not export code,
// // so we can just import it this way
// import './image_viewer';
//
// const total = sum(10, 5);
// console.log(total);


/* Code Splitting Example */
const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
  // System.import returns a promise
  System.import('./image_viewer').then(module => {
    module.default();
  });
};

document.body.appendChild(button);
