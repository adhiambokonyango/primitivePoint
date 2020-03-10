import React from 'react'
import {buyCake} from './redux'
import {connect} from 'react-redux'

function CakeContainer(props){
return(
<>
<h2>Number of cakes - {props.numberOfCakes}</h2>
<button onClick={props.buyCake}>buyCake</button>
</>
)
}

const mapStateToProps = state => {
return {
numberOfCakes: state.numberOfCakes
}
}

const mapDispatchToProps = dispatch => {
return{
buyCake: ( ) => dispatch(buyCake())
}
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)