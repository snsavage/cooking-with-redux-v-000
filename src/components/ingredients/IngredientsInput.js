import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createIngredient } from '../../actions/ingredients';
import { ConnectedIngredients } from './Ingredients.js';

export class IngredientsInput extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      calories: 0,
    }
  }

  nameOnChange(ev) {
    this.setState({ name: ev.target.value });
  }

  caloriesOnChange(ev) {
    this.setState({ calories: ev.target.value });
  }

  handleOnSubmit(ev) {
    ev.preventDefault();
    this.props.createIngredient(this.state);
    this.setState({
      name: '',
      calories: 0,
    });
  }

  render(){
    return(
      <div>
        <h2>Ingredients Input</h2>
        <form onSubmit={(ev) => this.handleOnSubmit(ev)}>
          Name:
          <input
            type="text"
            value={this.state.name}
            onChange={(ev) => this.nameOnChange(ev)} />
          <input
            type="text"
            value={this.state.calories}
            onChange={(ev) => this.caloriesOnChange(ev)} />
          <input type="submit" />
        </form>
        <ConnectedIngredients />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createIngredient: createIngredient
  }, dispatch);
}

export const ConnectedIngredientsInput
  = connect(null, mapDispatchToProps)(IngredientsInput);
