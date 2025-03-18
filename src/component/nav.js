import React from "react";

function Nav() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <img src="/Images/logo22.png" alt="Logo" className="w-12" />
        <ul className="flex space-x-6">
          <li>
            <a href="#home" className="text-gray-600 hover:text-gray-800">
              Home
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-600 hover:text-gray-800">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
