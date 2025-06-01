import React from 'react';
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 pt-4 pb-2 shadow-sm">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="desklinq logo" className="h-6 w-auto" />
      </div>

      {/* Menu */}
      <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700">
        <div className="relative group">
          <button className="hover:text-purple-600">Workspaces</button>
          {/* Dropdown (optional) */}
          <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-md rounded-md p-2">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 1</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 2</a>
          </div>
        </div>
        <a href="#" className="hover:text-purple-600">About us</a>
        <a href="#" className="hover:text-purple-600">Contact Us</a>
      </div>

      {/* Buttons */}
      <div className="flex items-center space-x-3">
        <button className="border border-gray-300 rounded-md px-4 py-1 text-sm hover:bg-gray-100">
          Log In
        </button>
        <button className="bg-purple-600 text-white rounded-md px-4 py-1 text-sm hover:bg-purple-700">
          List Your Space
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
