import React, { Component } from 'react'

class Welcome extends Component{
render(){
return(
<div>
<h1>Class component</h1>
{this.props.name}, {this.props.heroName}
</div>
)
}
}

export default Welcome