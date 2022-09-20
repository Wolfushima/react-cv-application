import React from 'react';

const TextArea = ({
  labelP, name, onChange, value,
}) => (
  <label htmlFor={name}>
    <p>{labelP}</p>
    <textarea name={name} onChange={onChange} value={value} />
  </label>
);

export default TextArea;
