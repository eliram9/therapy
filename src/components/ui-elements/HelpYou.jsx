import React from 'react';
import { HelpingHand } from '../../media/icons';


const HelpYou = () => {
    return (
        <div className='my-5 poppins xs:mb-24 sm:mb-28 xl:mb-24 2xl:mb-24 3xl:mb-24'>
            <h2 className="text-2xl font-semibold text-main relative dark:text-white">How Can I Help You?</h2>
            <div style={{ height: '3px', background: '#333', width: '12%', marginBottom: '36px' }}></div>
            <div className='flex flex-row items-center 
                            sm:flex-col'
            >
                <div className='flex-1 p-4' >
                    <HelpingHand className='' />
                </div>
                <div className='flex-1 p-4 text-black leading-loose dark:text-white font-light
                                xs:-mt-10 
                                sm:text-sm sm:-mt-10
                                md:text-sm lg:text-sm xl:text-md'
                >
                    <p className=''>When life becomes too much to handle, you might know what you need to do logically to make things better, but 
                         actually starting can feel pretty scary. 
                    </p>
                    <br />
                    <p className=''>
                            And when you're stuck in a loop of negative thoughts and bad habits, 
                            it's hard to shake off the guilt and move forward. You understand your struggles and story better than anyone 
                            else and I'm here to work alongside you to restore your calm.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HelpYou;