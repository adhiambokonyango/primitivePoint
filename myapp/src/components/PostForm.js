import React, {Component} from 'react'
import axios from 'axios'

class PostForm extends Component{

constructor(props){
super(props)

this.state = {
userId:'',
title:'',
body:''
}
}

changeHandler = (event) => {
this.setState({[e.target.name]: e.target.value})
}

submitHandler = (event) => {
event.preventDefault()
console.log(this.state)
axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
.then(response => {console.log(response)})
.catch(error => {console.log(error)})
}

render(){
const {userId, title, body} = this.state
return(
<>
<form onSubmit={this.submitHandler}>
<input type="text" name="userId" value={userId} onChange={this.changeHandler}/>
</div>
<div>
<input type="text" name="title" value={title} onChange={this.changeHandler}/>
</div>
<div>
<input type="text" name="body" value={body} onChange={this.changeHandler}/>
<button type="submit">submit</button>
</form>
</>
)
}
}

export default PostForm