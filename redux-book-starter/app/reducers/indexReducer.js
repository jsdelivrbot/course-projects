export default combineReducers({
  recipes: recipesReducer,
  ingredients: ingredientsReducer
});


// const rootReducer = (state, action) => {
//   return Object.assign({}, state, {
//     recipes: recipesReducer(state,recipes, action),
//     ingredients: ingredientsReducer(state.ingredients, action)
//   });
// };





// WRONG WAY TO CREATE A REDUCER
// BECAUSE IT MUTATES STATE by using push

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_RECIPE':
//       state.recipes.push({ name: action.name });
//   }
//   return state;
// };


// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_RECIPE':
//       return Object.assign({}, state, {
//         recipes: state.recipes.concat({ name: action.name })
//       });
//     case 'ADD_INGREDIENT':
//       const newIngredient = {
//         name: action.name,
//         recipe: action.recipe,
//         quantity: action.quantity
//       };
//       return Object.assign({}, state, {
//         ingredients: state.ingredients.concat(newIngredient)
//       });
//   }
//   return state;
// }
