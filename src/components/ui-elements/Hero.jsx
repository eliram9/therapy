import React from 'react';

import { HeroBackground } from '../../media/icons';
import PageContainer from './PageContainer';
import YellowEgg from '../../media/YellowEgg.svg';

const Hero = () => {

    return (
        <section className="relative w-full h-screen overflow-hidden flex items-center justify-center poppins">
            <HeroBackground />
            {/* Outer container to center everything vertically */}
            <PageContainer className="z-10">
            <div className="flex justify-between text-darkGray items-center"> 
                <div className='w-1/2'>
                    <h3 className='text-2xl font-light'>Reframe, Rebuilt, Renew:</h3>
                    <h1 className='text-4xl font-4xl font-semibold mb-8'>EMDR as Your Mind's Gym</h1>
                    <p className='leading-loose'>Healing is like building muscle —focused, intentional, and progressive. Just as lifting weights strengthens 
                       muscles, our EMDR sessions 'work out' the brain, teaching it to process and reframe feelings about ourselves
                    </p>
                </div>
                <div className='w-1/2 flex items-center justify-center'>
                    <img src={YellowEgg} alt='yellow-blob' />
                </div>
            </div>
            </PageContainer>
        </section>
    );
}

export default Hero
