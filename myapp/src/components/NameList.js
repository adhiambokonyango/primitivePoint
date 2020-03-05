import React from 'react'

function NameList(){
const persons = [
{
id: 1,
name: 'bruce',
age: 30,
skill: 'react'

},
{
id: 1,
name: 'diana',
age: 30,
skill: 'vue'
},
{
id: 1,
name: 'clark',
age: 30,
skill: 'java script'
}
]
const personsList = persons.map(person => <h1>{person.name}, {person.id}</h1>)
return(
<div>
{personsList}
</div>
)
}

export default NameList

