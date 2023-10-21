import React from "react";

const Button = ({ text, onClick, enabled = true }) => {
  const clickHandler = () => {
    if (enabled) {
      onClick();
    }
  };

  return (
    <button
      className='bg-[#4CAF50] hover:bg-teal-900 border-none text-white px-3 py-2 text-center inline-block text-lg rounded-lg'
      onClick={() => clickHandler()}
    >
      {text}
    </button>
  );
};

export default Button;