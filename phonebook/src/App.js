import React, { useState, useEffect } from 'react'
import ContactList from './ContactList'
import Filter from './Filter'
// import Input from './Input'
import PersonForm from './PersonForm'
import Title from './Title'
import axios from 'axios'
import { getAll, create } from './services/api'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  // const data = () => {
  //   axios
  //     .get('http://localhost:3001/persons')
  //     .then(response => {
  //       const personsData = response.data
  //       setPersons(personsData)
  //     })
  // }

  // useEffect(data, [])

  useEffect(() => {
    getAll()
      .then(response => {
       setPersons(response.data)
      })
  }, [])

  const isPersonExist = persons.some(person => person?.name?.toLowerCase() === newName.toLowerCase())

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

    const newContact = () => {
      create(newPerson)
        .then(response => {
          setPersons(persons.concat(response.data))
        }
      )
    }

      
    isPersonExist && isNumberExist ? alert(newName + ' ' + newNumber + ' is already added to phonebook') : newContact()
        
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