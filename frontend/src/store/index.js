import { createStore, combineReducers } from 'redux'
import { bookmarkReducer, mealReducer } from './reducers/index'
const reducers = combineReducers({ bookmarkReducer, mealReducer })

const store = createStore(reducers)

export default store