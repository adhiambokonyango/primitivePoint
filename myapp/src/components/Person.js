import React from 'react'

function Person({person}){
return(
<div>
<h1>{person.name}, {person.id}</h1>
</div>
)
}

export default Person