import React, { useState, useEffect } from 'react'
import ContactList from './ContactList'
import Filter from './Filter'
// import Input from './Input'
import PersonForm from './PersonForm'
import Title from './Title'
// import axios from 'axios'
import { getAll, create, remove, update } from './services/api'
import Notification from './Notification'
import "./index.css"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

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
        console.log(response.data);
       setPersons(response.data)
      })
  }, [])

  // const isPersonExist = persons.some(person => person?.name?.toLowerCase() === newName.toLowerCase())
  // console.log(isPersonExist);

  const existedPerson = persons.find(person => person?.name?.toLowerCase() === newName.toLowerCase())
  // console.log(existedPerson);

  // const isNumberExist = persons.some(person => person.number === newNumber)

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
      console.log(newPerson);
      create(newPerson)
        .then(response => {
          setPersons(persons.concat(response.data))
          setErrorMessage({
            message: `Added ${response.data.name}`,
            type: 'success'
          }
            )
          setTimeout(() => { setErrorMessage('') }, 1500)
        }
      )
    }

    const changePerson = ( id ) => {
      // const url = `http://localhost:3001/persons/${id}`
      const contact = persons.find(person => person.id === id)
      const changedContact = { ...contact, number: newNumber  }
      
      // axios.put(url, changedContact)
        update(id,changedContact)
        .then(response => {
          console.log(response.data);
          setPersons(persons.map(person => person.id !== id ? person : response.data))
          setErrorMessage({
            message: `${response.data.name} number has been changed to ${response.data.number}`,
            type: "success"
          }
            )
          setTimeout(() => { setErrorMessage('') }, 3000)
        })
          .catch(error => {
            setErrorMessage({
              message: `Information ${changedContact.name} has already been removed from server`,
              type: "error"
            })
            setTimeout(() => { setErrorMessage('') }, 3000)
        })
    }
      
    // isPersonExist && isNumberExist ? alert(newName + ' ' + newNumber + ' is already added to phonebook') : newContact()

    existedPerson ?
     (window.confirm(`${newName} is already added to ponebook, replace the old number with the new one?`) && changePerson(existedPerson.id)) : newContact()
        
    reset()
  }
   
  const removeContact = (e) => {
    const id = Number(e.target.id)
    const name = e.target.name
    
    if (window.confirm(`Delete ${name}?`)) {
      remove(id)
        .then(setPersons(persons.filter(person => {
          return person.id !== id
        }))
      )
    }
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
      <Notification
        message={errorMessage.message}
        type={errorMessage.type}
      />
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
      <ContactList
        persons={filteredList()}
        remove={removeContact}
      />
    </div>
  )
}

export default App