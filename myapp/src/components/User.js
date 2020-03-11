import React, Component from 'react'

class User extends Component {
render(){
return(
<>
{this.props.render(true)}
</>
)
}
}

export default User