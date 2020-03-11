import React, { Component } from 'react'

class ClickCounter extends Component{
render(){
const { count, incrementCount } = this.props
return(
<>
<button onClick={incrementCount}>clicked { count } Times</button>
</>
)
}
}

export default ClickCounter