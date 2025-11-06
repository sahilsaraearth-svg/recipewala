import React from "react";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between py-3 rounded-full bg-transparent px-10 border-neutral-600  shadow-md  border   m-auto w-3/6 ">
      <div>
        <h1 className="font-bold uppercase text-3xl tracking-wide cursor-pointer">
          Chef
        </h1>
      </div>
      <ul className="flex items-center gap-4 text-lg cursor-pointer ">
        <li className="   duration-200 bg-indigo-800/40 py-0.5 px-3 rounded-lg">
          Home{" "}
        </li>
        <li className="  duration-200 hover:bg-indigo-800/40 py-0.5 px-3 rounded-lg">
          About{" "}
        </li>
        <li className=" hover:bg-indigo-800/40 py-0.5 px-3 rounded-lg duration-200 ">
          Contact
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
