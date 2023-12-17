import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo, LightModeIcon, DarkModeIcon } from '../media/icons'
import useThemeSwitcher from './hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className = "" }) => {
    let location = useLocation()
    return (
        <Link to={href} className={`${className} relative group dark:text-white`}>
            {title}
            <span className={`absolute h-[1px] inline-block bg-main left-0 -bottom-0.5
                            group-hover:w-full transition-[width] ease duration-800"
                            ${location.pathname === href ? "w-full" : "w-0"} dark:bg-white`}
            >
                &nbsp;
            </span>
        </Link>
    );
}

const MobileCustomLink = ({ href, title, className = "" }) => {
    let location = useLocation()
    return (
        <Link to={href} className={`${className} relative group dark:text-white`}>
            {title}
            <span className={`absolute h-[1px] inline-block bg-white left-0 -bottom-0.5
                            group-hover:w-full transition-[width] ease duration-800"
                            ${location.pathname === href ? "w-full" : "w-0"} dark:bg-main`}
            >
                &nbsp;
            </span>
        </Link>
    );
}

const Navbar = () => {
    const [theme, toggleTheme] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }
  
    return (
        <header className='w-full px-32 py-6 flex items-center justify-between dark:bg-zinc-700 relative'>

            {/* --- ### --- RESPONSIVE ONLY --- ### --- */}
            {/* Hamburger menu responsive mode */}
            <button className='flex-col justify-center items-center hidden lg:flex z-20' onClick={handleClick}>
                <span className={`bg-main dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                <span className={`bg-main dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-main dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
            </button>

            {/* Responsive menu */}
            { isOpen ? 
                <div className='hidden lg:flex flex-col justify-between items-center fixed top-[20%] left-1/2 -translate-x-1/2 rounded-xl backdrop-blur-sm 
                              bg-slate-900/80 dark:bg-white/50 px-4 py-16 min-w-[70vw] 
                '>
                    <nav className="flex flex-col items-center justify-between">
                        <div className="items-center">
                            {/* <div className='mb-10'>
                                <Logo className='h-6 fill-white' />
                                <p className="text-[18px] font-extralight text-white block mb-12">Generations</p>
                            </div>     */}
                            <div className="text-center mb-12">
                                <MobileCustomLink href="/" title="Home Page" className="text-white dark:text-slate-900 dark:font-light text-sm font-extralight block mb-4" />
                                <MobileCustomLink href="/our-story" title="Our Story" className="text-white dark:text-slate-900 dark:font-light text-sm font-extralight block mb-4" />
                                <MobileCustomLink href="/explanation" title="Explanation" className="text-white dark:text-slate-900 dark:font-light text-sm font-extralight block mb-4" />
                                <MobileCustomLink href="/resources" title="Resources" className="text-white dark:text-slate-900 dark:font-light text-sm font-extralight block mb-4" />
                                <MobileCustomLink href="/contact-us" title="Contact Us" className="text-white dark:text-slate-900 dark:font-light text-sm font-extralight block" />
                            </div>
                        </div>
                    </nav>
                    <nav>
                        <div className="flex items-center dark:text-white text-white">
                            <p className='font-extralight dark:text-slate-900 dark:font-light text-sm'>1-(234)-567-8901</p>
                        </div>
                    </nav>
                </div>
                : 
                null
            }
            {/* --- ### --- END RESPONSIVE ONLY --- ### --- */}
            

            <div className='w-full flex justify-between items-center lg:hidden'>
                <nav className="items-center justify-between poppins dark:bg-zinc-700">
                    <div className="flex items-center">
                        <Link className='flex items-center' to="/">
                            <Logo className='w-12 h-12 dark:fill-purple-300' alt="logo" />
                            <span className="text-[26px] text-main ml-4 font-extralight dark:text-purple-300">Generations</span>
                        </Link>    
                        <div className="ml-10 mt-1 items-center">
                            <CustomLink href="/our-story" title="Our Story" className="ml-10 text-main hover:text-teal-600 text-sm dark:font-light" />
                            <CustomLink href="/explanation" title="Explanation" className="ml-10 text-main hover:text-teal-600 text-sm dark:font-light" />
                            <CustomLink href="/resources" title="Resources" className="ml-10 text-main hover:text-teal-600 text-sm dark:font-light" />
                            <CustomLink href="/contact-us" title="Contact Us" className="ml-10 text-main hover:text-teal-600 text-sm dark:font-light" />
                        </div>
                    </div>
                </nav>
                <nav>
                    <div className="flex items-center text-main dark:text-white">
                        <p className='font-normal text-sm'>1-(234)-567-8901</p>
                        <button onClick={toggleTheme} className='w-8 ml-4 flex items-center justify-center rounded-full mt-[-3px] p-[3px]'>
                            { theme === 'dark' ? <DarkModeIcon /> : <LightModeIcon /> }     
                        </button>
                    </div>
                </nav>
            </div>

            {/* This logo will be dispalyed only on mobile */}
            <div className='hidden lg:flex text-main dark:text-white'>
                <Logo className='absolute translate-x-[-50%] left-[50%] top-5 fill-main h-[32px] dark:fill-white' />
                {/* <p className="text-[18px] font-extralight text-white block mb-12">Generations</p> */}
                <button onClick={toggleTheme} className='w-6 flex items-center justify-end rounded-full z-20 mt-[-20px]'>
                    { theme === 'dark' ? <DarkModeIcon /> : <LightModeIcon /> }     
                </button>
            </div>    
        </header>
    );
};

export default Navbar;
