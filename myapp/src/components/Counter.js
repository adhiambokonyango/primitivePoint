import React, { Component } from 'react'

class Counter extends Component{

constructor() {
super()

this.state = {
counter: 0
}
}

eventHandler() {
this.setState({
counter: this.state.counter + 1

})
}

render(){
return(
<div>
<div>counter-{this.state.counter}</div>
<button onClick={() => this.eventHandler()}>increment</button>
</div>
)
}
}

export default Counter