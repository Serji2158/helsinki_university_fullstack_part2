
const Contact = ({ person, remove }) => {
  
  return (
  <div>
    <p>
      {person.name} {person.number}
        <button
          name={person.name}
          id={person.id}
          onClick={remove}
        >
          DELETE
        </button> 
    </p>
    
  </div>
)
}
  
   
  

export default Contact