import React from 'react'
import Input from './Input'

const Filter = ({text, name, value, onChange}) => (
    <Input
      text={text}
      name={name}
      value={value}
      onChange={onChange} />
  )


export default Filter