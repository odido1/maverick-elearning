import React from 'react';
import './FormInput.css';

const FormInput = ({ type, placeholder, name, value, onChange, required = false }) => {
  return (
    <div className="input-container">
      <input 
        type={type || 'text'} 
        placeholder={placeholder || ''}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="form-input"
      />
    </div>
  );
};

export default FormInput;