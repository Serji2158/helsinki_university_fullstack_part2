import React from 'react'

const Input = ({ text, name, value, onChange }) => (
    <div>
      <label>
        {text} 
          <input
            name={name}
            value={value}
            onChange={onChange}
          />
      </label>
    </div>
  )


export default Input