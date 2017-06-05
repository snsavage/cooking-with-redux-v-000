import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ConnectedAddIngredient } from './AddIngredient';

export class AddIngredients extends Component {
  render(){
    const currentIngredients = this.props.ingredients.filter((e) =>
      this.props.selectedIngredients.includes(e.id)
    );

    const currentIngredientsDisplay = currentIngredients.map((e, i) =>
      <li key={i}>{e.name}</li>
    );

    const addIngredients = this.props.ingredients.filter((e) =>
      !this.props.selectedIngredients.includes(e.id)
    );

    const addIngredientsDisplay = addIngredients.map((e, i) =>
      <ConnectedAddIngredient key={i} {...e} />
    );

    return(
      <div>
        <h3>Ingredients in Recipe</h3>
        <ul>
          {currentIngredientsDisplay}
        </ul>

        <h3>Other Ingredients</h3>
        <ul>
          {addIngredientsDisplay}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    selectedIngredients: state.recipeForm.ingredientIds
  }
}

export const ConnectedAddIngredients
  = connect(mapStateToProps, null)(AddIngredients);
