import 'normalize.css/normalize.css';
import 'assets/stylesheets/main.css';
import { createStore } from 'redux';





const initialState = {
   recipes: [
     {
       name: 'Omelette'
     }
   ],
   ingredients: [
     {
       recipe: 'Omelette',
       name: 'Egg',
       quantity: 2
     }
   ]
 };

const store = createStore(reducer, initialState);

store.subscribe(() => document.getElementById('counter').innerText = store.getState());

setInterval(() => store.dispatch({ type: 'INC' }), 500);

console.log("Redux started");

window.store = store;
