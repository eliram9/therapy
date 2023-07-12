import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import logo from '../../img/logo.svg';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Add dark mode logic here
  };

  return (
    <nav className="flex items-center justify-between bg-green-50 text-white px-6 py-4">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
        <div className="text-xl text-emerald-900 font-bold">Generations</div>
        <div className="ml-10">
          <a href="#" className="ml-10 text-emerald-900 font-medium hover:text-emerald-500">
            Our Story
          </a>
          <a href="#" className="ml-10 text-emerald-900 font-medium hover:text-emerald-500">
            Explanation
          </a>
          <a href="#" className="ml-10 text-emerald-900 font-medium hover:text-emerald-500">
            Resources
          </a>
          <a href="#" className="ml-10 text-emerald-900 font-medium hover:text-emerald-500">
            Contact Us
          </a>
        </div>
      </div>
      <div className="flex items-center">
        {isDarkMode ? (
          <FiSun
            className="text-2xl text-emerald-900 cursor-pointer mr-4"
            onClick={toggleDarkMode}
          />
        ) : (
          <FiMoon
            className="text-2xl text-emerald-900 cursor-pointer mr-4"
            onClick={toggleDarkMode}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
