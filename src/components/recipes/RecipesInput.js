import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addRecipe, clearIngredientIds } from '../../actions/recipes';
import { ConnectedRecipes } from './Recipes';
import { ConnectedIngredientsInput } from '../ingredients/IngredientsInput';
import { ConnectedAddIngredients } from '../ingredients/AddIngredients';

export class RecipesInput extends Component {
  constructor() {
    super();
    this.state = { name: '' }
  }

  handleOnChange(ev) {
    this.setState({ name: ev.target.value });
  }

  handleOnSubmit(ev) {
    ev.preventDefault();
    this.props.addRecipe({
      name: this.state.name,
      ingredientIds: this.props.ingredientIds
    });
    this.props.clearIngredientIds();
    this.setState({ name: '' });
  }

  render(){
    return(
      <div>
        <h2>Recipes Input</h2>
        <form onSubmit={(ev) => this.handleOnSubmit(ev)}>
          <p>Name:
            <input
              type="text"
              value={this.state.name}
              onChange={(ev) => this.handleOnChange(ev)} />
          </p>
          <ConnectedAddIngredients />
          <input type="submit" />
        </form>
        <ConnectedRecipes />
        <ConnectedIngredientsInput />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addRecipe: addRecipe,
    clearIngredientIds: clearIngredientIds
  }, dispatch);
}

const mapStateToProps = (state) => {
  return {
    ingredientIds: state.recipeForm.ingredientIds
  }
}

export const ConnectedRecipesInput
  = connect(mapStateToProps, mapDispatchToProps)(RecipesInput);
