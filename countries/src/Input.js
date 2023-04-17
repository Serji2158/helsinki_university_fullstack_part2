import React from 'react';

const Input = ({ text, value, onChange }) => (
  <div>
    <label>
      {text}
      <input value={value} onChange={onChange} />
    </label>
  </div>
);

export default Input;
