import React from "react";

const ButtonTwo = ({ btnname }) => {
  return (
    <button className="cursor-pointer hover:-translate-y-0.75 transition-transform duration-200 font-medium inset shadow-md hover:shadow-neutral-400 border-neutral-100 border text-neutral-800 text-sm sm:text-lg py-2 px-10 rounded-full bg-white">
      {btnname}
    </button>
  );
};

export default ButtonTwo;
