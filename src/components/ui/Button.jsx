import React from "react";

const Button = ({ btnname, cn }) => {
  return (
    <button
      className={`cursor-pointer hover:-translate-y-0.75 transition-transform duration-200 bg-orange-600 rounded-full text-neutral-100 font-medium  shadow-neutral-300 shadow-md  border-neutral-300 border ${cn}`}
    >
      {btnname}
    </button>
  );
};

export default Button;
