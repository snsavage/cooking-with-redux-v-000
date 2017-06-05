import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { recipeFormAddIngredient } from '../../actions/ingredients';

export class AddIngredient extends Component {
  handleOnClick(ev) {
    ev.preventDefault();
    this.props.recipeFormAddIngredient(this.props.id);
  }

  render(){
    return(
      <li>
        {this.props.name}
        <button onClick={this.handleOnClick.bind(this)} />
      </li>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    recipeFormAddIngredient: recipeFormAddIngredient
  }, dispatch);
}

export const ConnectedAddIngredient
  = connect(null, mapDispatchToProps)(AddIngredient);
