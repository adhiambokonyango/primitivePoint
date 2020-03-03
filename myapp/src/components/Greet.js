import React from 'react'

function Greet(props){
return(
<div>
<h1>hello {props.name}, {props.heroName}, {props.children}</h1>
</div>
)
}

//const Greet = () => {
//return <h1>hello vishwas</h1>
//}

export default Greet