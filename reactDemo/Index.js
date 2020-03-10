const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake(){
return {
type: BUY_CAKE,
info: 'First redux action'
}
}

function buyIcecream(){
return {
type: BUY_ICECREAM,
info: 'Second redux action'
}
}

const initialCakeState = {
numOfCakes: 10
}

const initialCreamState = {
numOfIcecream: 20
}

const cakeReducer = (state = initialCakeState, action) => {
switch(action.type){
case BUY_CAKE: return {
...state,
numOfCakes: state.numOfCakes - 1
}
default: return state
}
}

const creamReducer = (state = initialCreamState, action) => {
switch(action.type){
case BUY_ICECREAM: return {
...state,
numOfIcecream: state.numOfIcecream - 1
}
default: return state
}
}

const rootReducer = combineReducers({
cake: cakeReducer,
cream: creamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))
console.log('initialState', store.getState())
const unsubscribe = store.subscribe(() => {} )
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())

unsubscribe()