import React, { useState } from 'react'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const isPersonExist = persons.some(person => person.name.toLowerCase() === newName.toLowerCase())

  const addNewName = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName,
      // id: persons.length + 1
    }

    isPersonExist ? alert(newName + ' is already added to phonebook') : setPersons(persons.concat(newPerson))
 
    setNewName('')
  }
   
  const onHandleChange = (e) => {
    setNewName(e.target.value)    
    }

    
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input
            value={newName}
            onChange={onHandleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => (
        <React.Fragment key={person.name}>
          <p>{person.name}</p>
        </React.Fragment>
        ))
      }
    </div>
  )
}

export default App