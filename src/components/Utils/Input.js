import React from 'react';

const Input = ({
  labelP, type, name, onChange, value,
}) => (
  <label htmlFor={name}>
    <p>{labelP}</p>
    <input type={type} name={name} onChange={onChange} value={value} />
  </label>
);

export default Input;
