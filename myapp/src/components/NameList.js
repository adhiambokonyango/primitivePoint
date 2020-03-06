import React from 'react'
import Person from './Person'

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
const personsList = persons.map(person => <Person key={persons.skill} person={person} /> )
return(
<div>
{personsList}
</div>
)
}

export default NameList

