import React from 'react';

const Button = ({ text = 'Login', onClick, className = '' }) => {
    const defaultClasses = "bg-[#1B5C12] text-white font-medium py-0 px-5 rounded-md hover:bg-green-700 focus:outline-none border-0 transition-colors my-2";

  
  return (
    <button
      onClick={onClick}
      className={className ? `${className} ml-0 !important` : defaultClasses}
    >
      {text}
    </button>
  );
};

export default Button;