import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi';
import { Logo } from '../media/icons'

const CustomLink = ({ href, title, className = "" }) => {
    let location = useLocation()
    console.log(location.pathname)
    return (
        <a href={href} className={`${className} relative group`}>
            {title}
            <span className={`absolute h-[1px] inline-block bg-teal-900 left-0 -bottom-0.5
                            group-hover:w-full transition-[width] ease duration-800"
                            ${location.pathname === href ? "w-full" : "w-0"} dark:bg-light`}
            >
                &nbsp;
            </span>
        </a>
    );
}

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
                    <CustomLink href="/our-story" title="Our Story" className="ml-10 text-emerald-900 font-normal hover:text-teal-600" />
                    <CustomLink href="/explanation" title="Explanation" className="ml-10 text-emerald-900 font-normal hover:text-teal-600" />
                    <CustomLink href="/resources" title="Resources" className="ml-10 text-emerald-900 font-normal hover:text-teal-600" />
                    <CustomLink href="/contact-us" title="Contact Us" className="ml-10 text-emerald-900 font-normal hover:text-teal-600" />
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
