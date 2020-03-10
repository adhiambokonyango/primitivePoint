import {createStore} from 'redux'
import CakeReducer from './components/cakes/CakeReducer'

const store = createStore(CakeReducer)

export default store