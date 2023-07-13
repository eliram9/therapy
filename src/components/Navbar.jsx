import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Logo } from '../media/icons'

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Add dark mode logic here
  };

    return (
        <nav className="flex items-center justify-between px-6 py-6 poppins font-light border-b-[3px]">
            <div className="flex items-center">
                <Link className='flex' to="/">
                    <Logo className='w-[40px]' />
                    <span className="text-[26px] text-emerald-900 font-light ml-4">Generations</span>
                </Link>    
                <div className="ml-10">
                    <a href="/our-story" className="ml-10 text-emerald-900 font-normal hover:text-emerald-500">
                        Our Story
                    </a>
                    <a href="/explanation" className="ml-10 text-emerald-900 font-normal hover:text-emerald-500">
                        Explanation
                    </a>
                    <a href="/resources" className="ml-10 text-emerald-900 font-normal hover:text-emerald-500">
                        Resources
                    </a>
                    <a href="/contact-us" className="ml-10 text-emerald-900 font-normal hover:text-emerald-500">
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
