import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component{

constructor(props){
super(props)

this.state = {
name: 'vishwas'
}

console.log('LifecycleA constructor')
}

static getDerivedStateFromProps(props, state){
console.log('LifecycleA getDerivedStateFromProps')
return null
}

componentDidMount(){
console.log('LifecycleA componentDidMount')
}

shouldComponentUpdate(){
console.log('LifecycleA shouldComponentUpdate')
return true
}

getSnapshotBeforeUpdate(prevProps, prevState){
console.log('LifecycleA getSnapShotBeforeUpdate')
return null
}

componentDidUpdate(){
console.log('LifecycleA componentDidUpdate')
}

changeState = () => {
this.setState({
name: 'mary'
})
}

render(){
console.log('LifecycleA render')
return(
<>
<LifecycleB />
<button onClick={this.changeState}>change state</button>
</>
)
}
}

export default LifecycleA