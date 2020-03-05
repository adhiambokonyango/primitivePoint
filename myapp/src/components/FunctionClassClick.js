import React, { Component } from 'react'

class FunctionClassClick extends Component{

clickHandler() {
console.log('clicked the button')
}

render(){
return(
<div>
<button onClick={this.clickHandler}>FunctionClassClick</button>
</div>
)
}
}
export default FunctionClassClick