import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import  { citiesReducer }  from './citiesReducer'



const rootReducer = combineReducers({
  citiesR: citiesReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store
