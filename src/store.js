import { createStore } from 'redux'
import rootReducer from './reducers/index'

export function configureStore(){
  // return createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  return createStore(rootReducer)
}

export const store = configureStore()
