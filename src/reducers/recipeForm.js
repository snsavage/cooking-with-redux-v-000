export default function recipeForm(state = { ingredientIds: [] }, action){
  switch (action.type) {
    case 'RECIPE_FORM_ADD_INGREDIENT':
      const ids = [...state.ingredientIds, action.payload];
      return Object.assign({}, { ingredientIds: ids });
    case 'CLEAR_INGREDIENT_IDS':
      return { ingredientIds: [] };
    default:
      return state;
  }
}
