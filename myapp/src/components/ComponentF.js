import React, {Component} from 'react'
import {UserConsumer} from './userContext'

class ComponentF extends Component{
render(){
return(
<>
ComponentF
<UserConsumer>
{
(userName) => {
return <h4>hello {userName} </h4>
}
}
</UserConsumer>
</>
)
}
}

export default ComponentF