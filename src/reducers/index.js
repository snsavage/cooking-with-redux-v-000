import { combineReducers } from 'redux';

import recipesReducer from './recipes';
import ingredientsReducer from './ingredients';
import recipeFormReducer from './recipeForm';

export default combineReducers({
  ingredients: ingredientsReducer,
  recipes: recipesReducer,
  recipeForm: recipeFormReducer
});

