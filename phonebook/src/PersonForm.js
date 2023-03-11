import Input from './Input'

const PersonForm = ({ onSubmit, newName, newNumber, onChange }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <Input
          text="name: "
          name="name"
          value={newName}
          onChange={onChange} />  
        <Input
          text="number: "
          name="number"
          value={newNumber}
          onChange={onChange} />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  )
}

export default PersonForm