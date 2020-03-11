import React, {Component} from 'react'
import ComponentE from './ComponentF'
import UserContext from './userContext'

class ComponentE extends Component{
render(){
return(
<>
ComponentE context {this.context}
<ComponentF />
</>
)
}
}

ComponentE.contextType = UserContext

export default ComponentE