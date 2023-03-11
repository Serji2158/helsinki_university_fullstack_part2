import React, { useState } from 'react'
import ContactList from './ContactList'
import Filter from './Filter'
// import Input from './Input'
import PersonForm from './PersonForm'
import Title from './Title'


const App = () => {
  const [persons, setPersons] = useState([
  { name: 'Arto Hellas', number: '040-123456', id: 1 },
  { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const isPersonExist = persons.some(person => person.name.toLowerCase() === newName.toLowerCase())
  const isNumberExist = persons.some(person => person.number === newNumber)

  const reset = () => {
    setNewName((prev) => '')
    setNewNumber((prev) => '')
  }

  const addNewContact = (e) => {
    e.preventDefault()

    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    isPersonExist && isNumberExist ?
      alert(newName + ' ' + newNumber + ' is already added to phonebook') :
      setPersons(persons.concat(newPerson))
    
    reset()
  }
   
  const onHandleChange = (e) => {
    const { value, name } = e.target
    switch (name) {
      case "name": setNewName(value)
        break
      case "number": setNewNumber(value)
        break
      case "filter": setFilter(value)
        break
      default:
        return 
    }
  }
 
  const filteredList = () => {
  const normalizedFilter = filter.toLowerCase()
  return normalizedFilter ? persons.filter(person => person.name.toLowerCase().includes(normalizedFilter)) : persons              
  }
    
  return (
    <div>
      <Title text="Phonebook" />
      <Filter 
        text="filter shown with: "
        name="filter"
        value={filter}
        onChange={onHandleChange} />
      <Title text="Add a new" />
      <PersonForm
        onSubmit={addNewContact}
        newName={newName}
        newNumber={newNumber}
        onChange={onHandleChange} />
      <Title text="Numbers" />
      <ContactList persons={filteredList()} />
    </div>
  )
}

export default App