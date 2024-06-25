import React from 'react';
import { Link } from 'react-router-dom';

import useScreenSize from '../hooks/useScreenSize';
import { BrainGear, ContactUs, Explore, HeroBackground } from '../../media/icons';
import PageContainer from './PageContainer';


const Hero = () => {
    const isSmallScreen = useScreenSize();

    return (
        <section className="relative w-full pt-20 h-screen poppins dark:bg-black">
            <div className="absolute inset-0 w-full h-full bg-hero-background dark:z-20"></div>
            <div className="relative z-10 text-center w-full h-full xs:1/2 flex items-center justify-center">
                <PageContainer>
                    <div className='w-full flex sm:flex-col flex-row items-center text-black dark:text-white'
                    >
                        <div className="w:1/2 flex flex-col items-start">
                            <h2 className='flex justify-start w-full text-3xl font-light 
                                          xs:text-xl sm:text-2xl md:text-xl lg:text-xl 2xl:text-2xl 3xl:text-3xl'
                            >
                                Reframe, Rebuild, Renew:
                            </h2>

                            <h1 className='flex justify-start w-full text-5xl font-semibold pt-4 pb-6 
                                          xs:text-2xl sm:text-3xl md:text-2xl lg:text-2xl xl:text-4xl 3xl:text-5xl'
                            >
                                EMDR as Your Mind's Gym
                            </h1>

                            <p className='flex justify-start w-full text-left leading-loose font-light
                                          lg:text-sm xl:text-md 2xl:text-base 3xl:text-xl'
                            >
                                Healing is like building muscle — focused, intentional, and progressive.
                            </p>
                            <p className='flex justify-end w-full text-left leading-loose font-light 
                                         lg:text-sm xl:text-md 2xl:text-base 3xl:text-xl'
                            >
                                Just as lifting weights strengthens muscles, our EMDR sessions 'work out' the brain,
                                teaching it to process and reframe feelings about ourselves. 
                            </p>
                            <div className='sm:w-full flex justify-center items-center'>
                                <Link to="/contact-us"
                                        className='my-10 px-6 py-2 bg-main text-white rounded-lg font-light flex items-center space-x-2 border-main border
                                                hover:bg-[#0E3A4A]
                                                xs:px-4 xs:text-xs xs:py-1
                                                sm:px-5 sm:text-sm
                                                md:text-sm'
                                >
                                    <span>Contact Us</span>
                                    <ContactUs className='xs:h-4 md:h-5' />
                                </Link>

                                <Link to="/"
                                        className='my-10 px-6 py-2 bg-white text-main rounded-lg flex items-center space-x-2 ml-7 border-main border
                                                hover:bg-[#E6E6E6]
                                                xs:px-4 xs:text-xs xs:py-1
                                                sm:px-5 md:text-sm'
                                >
                                    <span>Explore</span>
                                    <Explore className='xs:h-4 md:h-5 p-[1px]' />
                                </Link>
                            </div>
                        </div> 
                        <div className="w-1/2 flex justify-end
                                        sm:w-full sm:h-fit"
                        >
                            <BrainGear viewBox={isSmallScreen ? '-40 0 672 690' : '-90 0 672 690'} className='sm:h-1/2' />
                        </div>
                    </div>
                </PageContainer>
            </div>
        </section>
    );
};

export default Hero;

