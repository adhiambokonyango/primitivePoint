import React, { Component } from 'react'

class EventBind extends Component{

constructor(props){
super(props)

this.state = {
message: 'hello'
}
}

changeMessage() {
this.setState({
message: 'goodbye'
})
console.log('this')
}

render(){
return(
<div>
<div>{this.state.message}</div>
<button onClick={() => {this.changeMessage.bind(this)()}}>click</button>
</div>
)
}
}

export default EventBind