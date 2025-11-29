import React from "react";

const Button = ({ btnname, cn ,e }) => {
  return (
    <button
    onClick={e}
      className={`cursor-pointer hover:scale-95 transition-transform duration-200 bg-orange-600 rounded-full text-neutral-100 font-medium  shadow-neutral-300 shadow-md  border-neutral-300 border ${cn}`}
    >
      {btnname}
    </button>
  );
};

export default Button;
