import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ConnectedAddIngredient } from './AddIngredient';

export class AddIngredients extends Component {
  render(){
    const { selectedIngredients, unselectedIngredients } = this.props;
    let ingredients, addIngredients;

    if (selectedIngredients && unselectedIngredients) {
      ingredients = selectedIngredients.map((e, i) =>
        <li key={i}>{e.name}</li>
      );

      addIngredients = unselectedIngredients.map((e, i) =>
        <ConnectedAddIngredient key={i} {...e} />
      );
    } else {
      ingredients = [];

      addIngredients = this.props.ingredients.map((e, i) =>
        <ConnectedAddIngredient key={i} {...e} />
      );
    }

    return(
      <div>
        <h3>Ingredients in Recipe</h3>
        <ul>
          {ingredients}
        </ul>

        <h3>Other Ingredients</h3>
        <ul>
          {addIngredients}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
  }
}

export const ConnectedAddIngredients
  = connect(mapStateToProps, null)(AddIngredients);
