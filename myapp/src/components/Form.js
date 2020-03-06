import React, { Component } from 'react'

class Forms extends Component{

constructor(props){
super(props)

this.state = {
userName: '',
comments: '',
topic: 'react'
}
}

handleusernamechange = (event) => {
this.setState({
userName: event.target.value
})
}

handlecomments = (event) => {
this.setState({
comments: event.target.value
})
}

handletopicchange = (event) => {
this.setState({
topic: event.target.value
})
}

handlesubmit = (event) => {
alert(`${this.state.topic} ${this.state.userName} ${this.state.comments}`)
}


render(){
return(
<form onSubmit={this.handlesubmit}>
<div>
<label>userName</label>
<input type='text' value={this.state.userName} onChange={this.handleusernamechange}/>
</div>
<div>
<label>comments</label>
<textarea type='text' value={this.state.comments} onChange={this.handlecomments}></textarea>
</div>
<div>
<label>topic</label>
<select value={this.state.topic} onChange={this.handletopicchange}>
<option value="react">react</option>
<option value="vue">vue</option>
<option value="angular">angular</option>
</select>
</div>
<button type="submit">submit</button>
</form>
)
}
}

export default Forms