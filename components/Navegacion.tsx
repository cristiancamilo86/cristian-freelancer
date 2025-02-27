import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navegacion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { name: "inicio", href: "#inicio" },
    { name: "Acerca de", href: "#Acerca det" },
    { name: "Habilidades", href: "#Habilidades" },
    { name: "proyectos ", href: "#proyectos " },
  ];

  return (
    <nav className=" text-white shadow-xl fixed w-full top-0 z-50 border-amber-500 p-6">
      <div className="flex justify-between items-center max-w-full px-6">
        <h1 className="text-white text-2xl font-bold">Christian Freelancer</h1>
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={39} /> : <Menu size={38} />}
        </button>
      </div>
      <ul
        className={`absolute w-full bg-black xl:bg-transparent flex flex-col md:flex-row justify-center items-center xl:space-x-10 p-6 md:p-0 transition-all duration-300 ${
          isOpen ? "block top-16" : "hidden"
        } md:flex`}
      >
        {menuItems.map((item) => (
          <li
            key={item.name}
            className="text-white hover:text-orange-500 py-2 md:py-0 transition-colors duration-300"
          >
            <a
              href={item.href}
              className="block px-5"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
