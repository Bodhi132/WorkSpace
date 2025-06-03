import { useState } from "react";
import logo from "../assets/logo.png";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-12 py-4 shadow-sm bg-white relative z-20">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="desklinq logo" className=" h-10 w-auto" />
      </div>

      {/* Hamburger Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700">
        <div className="relative group inline-block">
          <button className="hover:text-purple-600 flex items-center gap-1">
            <p>Workspaces</p>
            <FiChevronDown className="text-sm" />
          </button>
          <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-md rounded-md p-2 z-10">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Option 1
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Option 2
            </a>
          </div>
        </div>
        <a href="#" className="hover:text-purple-600">
          About us
        </a>
        <a href="#" className="hover:text-purple-600">
          Contact Us
        </a>
      </div>

      {/* Buttons */}
      <div className="hidden md:flex items-center space-x-3">
        <button className="border border-gray-300 rounded-md px-4 py-2 text-sm hover:bg-gray-100">
          Log In
        </button>
        <button className="bg-[#6115E7] text-white rounded-md px-4 py-2 text-sm hover:bg-purple-700">
          List Your Space
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden flex flex-col items-start px-6 py-4 space-y-4 text-sm font-medium text-gray-700">
          <div className="w-full">
            <button className="w-full flex justify-between items-center hover:text-purple-600">
              <span>Workspaces</span>
              <FiChevronDown />
            </button>
            {/* Optional dropdown for mobile */}
            <div className="ml-4 mt-2 space-y-2">
              <a href="#" className="block hover:text-purple-600">Option 1</a>
              <a href="#" className="block hover:text-purple-600">Option 2</a>
            </div>
          </div>
          <a href="#" className="hover:text-purple-600">About us</a>
          <a href="#" className="hover:text-purple-600">Contact Us</a>
          <div className="flex flex-col w-full space-y-2 pt-2">
            <button className="border border-gray-300 rounded-md px-4 py-2 text-sm hover:bg-gray-100 w-full">
              Log In
            </button>
            <button className="bg-purple-600 text-white rounded-md px-4 py-2 text-sm hover:bg-purple-700 w-full">
              List Your Space
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
