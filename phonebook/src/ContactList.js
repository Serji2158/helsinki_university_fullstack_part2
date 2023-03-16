import React from 'react'
import Contact from './Contact'

const ContactList = ({persons, remove}) => (
  
  <>
    {persons.map(person => (
      <React.Fragment key={person.id}>
        <Contact person={person} remove={remove} />          
      </React.Fragment>
      ))
    }
  </>
)


export default ContactList