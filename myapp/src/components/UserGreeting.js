import React, { Component } from 'react'

class UserGreeting extends Component{

constructor(props){
super(props)

this.state = {
isLoggedIn: true
}
}

render(){
return this.state.isLoggedIn && <div>welcome</div>

//return (
//this.state.isLoggedIn?
//<div>welcome</div>:
//<div>sign In</div>
//)

//let message
//if (this.state.isLoggedIn) {
//message = <div>welcome</div>
//} else {
//message = <div>sign In</div>
//}
//
//return <div>{message}</div>
//if (this.state.isLoggedIn) {
//return <div>welcome vishwas</div>
//} else {
//return <div>welcome guest</div>
//}
}
}

export default UserGreeting
