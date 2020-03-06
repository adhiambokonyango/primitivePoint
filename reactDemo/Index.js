const redux = require('redux')
const createStore = redux.createStore

var BUY-CAKE = 'BUY-CAKE'

function buyCake(){
return {
type: BUY-CAKE,
info: 'First redux action'
}
}

const initialState = {
numOfCakes: 10
}

const reducer = (state = initialState, action) => {
switch(action.type){
case BUY-CAKE: return {
...state,
numOfCakes: state.numOfCakes - 1
}
default: return state
}
}

const store = createStore(reducer)
console.log('initialState', store.getState())
const unsubscribe = store.subscribe(() => console.log('update state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubscribe()