import React, { Component } from 'react'

class FunctionClassClick extends Component{

clickHandler() {
console.log('clicked the button')
}

render(){
return(
<div>
<button onClick={this.clickHandler}>clickMe</button>
</div>
)
}
}
export default FunctionClassClick