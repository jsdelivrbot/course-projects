import 'normalize.css/normalize.css';
import 'assets/stylesheets/main.css';
import { createStore } from 'redux';


// WRONG WAY TO CREATE A REDUCER
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_RECIPE':
//       state.recipes.push({ name: action.name });
//   }
//   return state;
// };
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return Object.assign({}, state, {
        recipes: state.recipes.concat({
          name: action.name
        });
      })
  }
  return state;
}

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
