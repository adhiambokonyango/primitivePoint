import React, { Component } from 'react'

class Message extends Component{

constructor() {
super()

this.state = {
message: 'welcome visitor'
}
}

changeHandler() {
this.setState(
{
message: 'thank you For subscribing'
}
)
}

render(){
return(
<div>
<h1>{this.state.message}</h1>
<button onClick={() => this.changeHandler()}>subscribing</button>
</div>
)
}
}

export default Message