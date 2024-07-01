import React from 'react';
import { HelpingHand } from '../../media/icons';
import SectionSubtitle from './SectionSubtitle';


const HelpYou = () => {
    return (
        <>
            <section className='my-5 poppins xs:mb-24 sm:mb-28 xl:mb-24 2xl:mb-24 3xl:mb-24'>
                <div className='flex flex-row items-center 
                                sm:flex-col'
                >
                    <div className='flex-1' >
                        <HelpingHand />
                    </div>
                    <div className='flex-1 text-black leading-relaxed dark:text-white font-light
                                    // xs:-mt-10 
                                    // sm:text-sm sm:-mt-10
                                    // md:text-sm lg:text-sm xl:text-md'
                    >
                        <SectionSubtitle subtitle="How Can I Help You?" className="mb-20" />
                        <p>When life becomes too much to handle, you might know what you need to do logically to make things better, but 
                            actually starting can feel pretty scary. 
                        </p>
                        <br />
                        <p>
                                And when you're stuck in a loop of negative thoughts and bad habits, 
                                it's hard to shake off the guilt and move forward. You understand your struggles and story better than anyone 
                                else and I'm here to work alongside you to restore your calm.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HelpYou;