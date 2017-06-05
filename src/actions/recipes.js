export function addRecipe(recipe) {
  return {
    type: 'ADD_RECIPE',
    payload: recipe,
  }
}

export function clearIngredientIds() {
  return {
    type: 'CLEAR_INGREDIENT_IDS'
  }
}
