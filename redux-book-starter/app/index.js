import store from './store/store';
import { addRecipe } from './actions/recipes';
import { addIngredient } from './actions/ingredients';

store.dispatch(addRecipe('Pancake'));
store.dispatch(addIngredient('Pancake', 'Eggs', 3));

window.store = store;
