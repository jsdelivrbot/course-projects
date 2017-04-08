import { ADD_RECIPE } from '../actions/action-types';

const recipesReducer = (recipes, action) => {
  switch(action.type) {
    case 'ADD_RECIPE':
      return recipes.concat({name: action.name});
  }
  return recipes;
};
