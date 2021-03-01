import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import  { citiesReducer }  from './citiesReducer'
import { itinerariesReducer } from './itinerariesReducer'
import { usersReducers } from './usersReducer';



const rootReducer = combineReducers({
  citiesR: citiesReducer,
  itinerariesR: itinerariesReducer,
  usersR: usersReducers
})

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store
