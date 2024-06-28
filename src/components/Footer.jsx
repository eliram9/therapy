import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Arrow, Envelope, Logo, Phone, Danger } from '../media/icons';


const firstH3 = {
    backgroundImage: 'linear-gradient(to right, #124C5F, #C7E7E1, #EBA8BF)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    display: 'inline',
    fontWeight: 600,
}

const secondH3 = {
    backgroundImage: 'linear-gradient(to right, #EBA8BF, #C7E7E1, #124C5F )',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    display: 'inline',
    fontWeight: 600
}

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [bannerWidth, setBannerWidth] = useState("");

    useEffect(() => {
        const calculateWidth = () => {
            const screenWidth = window.innerWidth;
    
            let newWidth;
            if (screenWidth <= 767) {
                newWidth = `${screenWidth * 0.9}px`; // 80% of the screen width for smaller screens
            } else if (screenWidth > 767 && screenWidth <= 1279) {
                newWidth = `${screenWidth * 0.8}px`; // 60% of 767px for medium screens
            } else {
                newWidth = `${screenWidth * 0.65}px`; // 50% of the screen width for larger screens
            }
        
            setBannerWidth(newWidth);
        };
    
        calculateWidth();
        window.addEventListener('resize', calculateWidth);
    
        return () => window.removeEventListener('resize', calculateWidth);
      }, []);

    return (
        <footer className="text-main text-center bottom-0 w-full py-5 bg-gradient-to-b from-lightGray to-blue poppins">    
            <div className='w-full pt-[150px] justify-center bg-gradient-to-b from-lightGray to-blue relative z-20 py-0'>
                <div className="md:flex md:flex-col grid grid-cols-3 gap-1 xs:gap-4">
                <Link className='flex items-center justify-center mb-6'  to="/" >
                            <Logo className={"#124C5F"} alt="logo" width={25} />
                            <span className="text-[26px] md:text-base text-main ml-1 font-extralight dark:text-main">
                                Big
                                <span className='font-normal'>
                                    Brain
                                </span>
                            </span>
                        </Link>   

                        <div>
                            <div className="flex flex-col md:flex-row ml-10 justify-around w-full text-sm items-center
                                            md:ml-0"
                            >
                                <div className="flex items-center">
                                    <Phone fill="#124C5F" />
                                    <p className="leading-10">+1 (301)-337-5676</p>
                                </div>
                                <div className="flex items-center">
                                    <Envelope fill="#124C5F" />
                                    <p className="leading-10">info@bigbrain.com</p>
                                </div>
                            </div>   
                        </div>

                    <div>
                        <div className="flex flex-col md:flex-row ml-10 justify-around w-full text-sm items-center
                                            md:ml-0">
                            <Link to="/about" className="leading-5">About</Link>
                            <Link to="/emdr" className="leading-5">EMDR</Link>
                            <Link to="/resources" className="leading-5">Resources</Link>
                            <Link to="/contact-us" className="leading-5">Contact </Link>
                        </div>   
                    </div>
                </div>

                <div className='w-full flex justify-center absolute -top-[110px] left-1/2 transform -translate-x-1/2 dark:bg-black
                                xl:-top-[95px] md:-top-[100px]'
                >
                    <div style={{ width: bannerWidth }} 
                         className='bg-white flex flex-row justify-between rounded-xl drop-shadow-lg border-white border border-opacity-20 px-16 py-8
                                    sm:flex-col sm:justify-center sm:px-6 sm:py-4'
                    >
                        <div className='flex flex-col items-start justify-end text-3xl mb-4 sm:mb-0
                                         sm:text-xl sm:items-center xl:text-2xl'
                        >
                            <h3 style={firstH3}>Ready to get started?</h3>
                            <h3 style={secondH3}>Talk to us today</h3>
                        </div>
                        
                        <div className='flex items-center text-white sm:mt-4 sm:justify-center'> 
                            <Link to="/contact-us"
                                  className='bg-main text-sm py-2 px-4 rounded-xl flex items-center hover:bg-[#0E3A4A]
                                              sm:py-1 xs:text-xs'
                            >
                                I'm ready
                                <span><Arrow /></span>
                            </Link>
                        </div>
                    </div>
                </div> 

                <div className='flex h-auto justify-center items-end py-5 px-2 z-20'>
                    <div className='w-[1400px] py-7 px-5 leading-10 border border-red-200 rounded-xl bg-white bg-opacity-[35%]'>
                        <div className='flex justify-center mb-2'>
                            <Danger fill='#fda4af' />
                        </div>
                        <p className='leading-10 font-medium text-sm'>Amma Lucy LLC and or BigBrain is not a crisis facility.</p>
                        <p className='font-medium text-sm'>Amma Lucy LLC and or BigBrain does not provide emergency services.</p>
                        <p className='leading-5 font-light text-sm'>If you or someone you know is experiencing a mental health crisis, please call or text 988 at any 
                            time to be connected to a trained crisis counselor. If you’re looking to find an incredible therapist 
                            for ongoing proactive mental health care, you got to the right place, take a deep breath and get 
                            connected today!.</p>
                    </div>           
                </div>

                <div className=''>
                    <p className="text-xs">© {currentYear} All rights reserved to Amma Lucy LLC 
                        <span className='mx-1'>|</span> 
                        <a href="https://github.com/eliram9" className="text-main hover:underline" target="_blank" rel="noopener noreferrer">
                            eliram9
                        </a>
                        &nbsp;&amp;&nbsp;
                        <a href="https://github.com/ItayLevy1" className="text-main hover:underline" target="_blank" rel="noopener noreferrer">
                            ItayLevy1
                        </a>
                    </p>
                </div>
                <p className='text-red-500'>{bannerWidth}</p>
            </div>
        </footer>
    );
}

export default Footer
