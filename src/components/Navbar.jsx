import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo, LightModeIcon, DarkModeIcon } from '../media/icons'
import useThemeSwitcher from './hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className = "" }) => {
    let location = useLocation()
    return (
        <Link to={href} className={`${className} relative group`}>
            {title}
            <span className={`absolute h-[1px] inline-block bg-teal-900 left-0 -bottom-0.5
                            group-hover:w-full transition-[width] ease duration-800"
                            ${location.pathname === href ? "w-full" : "w-0"} dark:bg-light`}
            >
                &nbsp;
            </span>
        </Link>
    );
}

const Navbar = () => {
    const [theme, toggleTheme] = useThemeSwitcher();
    console.log(theme);
  
    return (
        <nav className="flex items-center justify-between px-6 py-6 poppins font-light border-b-[3px] dark:bg-gray-500">
            <div className="flex items-center">
                <Link className='flex' to="/">
                    <Logo className='w-10' />
                    <span className="text-[26px] text-emerald-900 font-light ml-4">Generations</span>
                </Link>    
                <div className="ml-10">
                    <CustomLink href="/our-story" title="Our Story" className="ml-10 text-emerald-900 font-normal hover:text-teal-600" />
                    <CustomLink href="/explanation" title="Explanation" className="ml-10 text-emerald-900 font-normal hover:text-teal-600" />
                    <CustomLink href="/resources" title="Resources" className="ml-10 text-emerald-900 font-normal hover:text-teal-600" />
                    <CustomLink href="/contact-us" title="Contact Us" className="ml-10 text-emerald-900 font-normal hover:text-teal-600" />
                </div>
            </div>
            <div className="flex items-center text-teal-900">
                <p className='font-normal text-sm'>1-(234)-567-8901</p>
                <button onClick={toggleTheme} className='w-8 ml-4 flex items-center justify-center rounded-full p-1'>
                    { theme === 'dark' ? <DarkModeIcon /> : <LightModeIcon /> }     
                </button>
            </div>
        </nav>
        
      
    
    );
};

export default Navbar;
