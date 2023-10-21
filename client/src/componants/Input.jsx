import React from "react";

const Input = ({ onChange, label, placeholder=label, type = "text" }) => {
  return (
    <div className="flex flex-col justify-center items-center m-4">
      <label className="pointer-events-none">
        {label}: 
      </label>
      <input
        className="w-[60%] h-[100%] border rounded-xl text-[#cccccc] p-2 bg-zinc-700"
        type={type}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;