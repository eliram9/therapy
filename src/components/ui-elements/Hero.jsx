import React from 'react';

import { BrainGear, HeroBackground } from '../../media/icons';
import PageContainer from './PageContainer';


const Hero = () => {
    return (
        <section className="relative mt-2 h-screen md:h-1/2 lg:h-4/6 xl:h-3/4  poppins">
            <div className="absolute inset-0 w-full h-full bg-hero-background"></div>
            <div className="relative z-10 text-center w-full h-full xs:1/2 flex items-center justify-center">
                <PageContainer>
                    <div className='w-full flex sm:flex-col flex-row items-center -mt-60 text-black dark:text-white
                                    xs:-mt-32 sm:-mt-28 lg:-mt-20 xl:-mt-16 2xl:-mt-14'
                    >
                        <div className="w-full 2xl:w-3/5 flex flex-col items-start">
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

                            <p className='flex justify-start w-full text-left leading-loose text-xl font-light 
                                          lg:text-sm xl:text-md 2xl:text-md 3xl:text-base'
                            >
                                Healing is like building muscle — focused, intentional, and progressive.
                            </p>
                            <p className='flex justify-end w-full text-left leading-loose text-xl font-light 
                                         lg:text-sm xl:text-md 2xl:text-md 3xl:text-base'
                            >
                                Just as lifting weights strengthens muscles, our EMDR sessions 'work out' the brain,
                                teaching it to process and reframe feelings about ourselves. 
                            </p>
                        </div> 
                        <div className="w-full 2xl:w-2/5 flex justify-end items-center sm:hidden 
                                        md:w-[300px] lg:w-[360px] xl:h-[500px] xl:w-[400px]"
                        >
                            <BrainGear />
                        </div>
                    </div>
                </PageContainer>
            </div>
        </section>
    );
};

export default Hero;

