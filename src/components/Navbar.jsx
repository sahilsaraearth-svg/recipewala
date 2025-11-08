import { MenuIcon } from "lucide-react";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <div className="relative ">
      <div className="flex relative  rounded-full justify-between items-center mt-4 max-w-4xl mx-auto border border-neutral-600  shadow-created py-4 px-8 backdrop-blur-md bg-indigo-600/10">
        <h1 className="font-bold uppercase text-3xl tracking-wide cursor-pointer">
          Chef
        </h1>
        <div className="hidden sm:flex items-center gap-3 list-none text-neutral-400 ">
          {links.map((link, index) => {
            return (
              <li
                className="hover:text-neutral-200 cursor-pointer"
                href={link.href}
                key={index}
              >
                {link.name}
              </li>
            );
          })}
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden">
          <MenuIcon />
        </button>
        {isOpen && (
          <div className="absolute inset-x-0 top-20 z-10 max-w-[90%] mx-auto rounded-lg backdrop-blur-3xl bg-indigo-900/90 border border-indigo-400/40  text-2xl shadow-lg">
            <div className="flex flex-col items-start gap-3 list-none text-neutral-400 p-4 ">
              {links.map((link, index) => {
                return (
                  <li
                    className="hover:text-neutral-200 cursor-pointer"
                    href={link.href}
                    key={index}
                  >
                    {link.name}
                  </li>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
