import uuidV4  from 'uuid/v4';

export default function recipes(state = [], action){
  switch (action.type) {
    case 'ADD_RECIPE':
      const recipe = Object.assign({}, action.payload, { id: uuidV4() });
      return [...state, recipe];
    default:
      return state;
  }
}
