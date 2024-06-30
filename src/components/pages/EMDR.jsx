import React from 'react';

import PageContainer from '../ui-elements/PageContainer';
import { Factory, GirlsPuzzle, HeroGrayBackground } from '../../media/icons';
import QuoteBox from '../ui-elements/QuoteBox';
import SectionSubtitle from '../ui-elements/SectionSubtitle';
import FooterNew from '../FooterNew';



const EMDR = () => {
    return (
        <>
            <section className='relative w-full h-auto'>
                <HeroGrayBackground className="absolute inset-0 w-full h-full" />
                <PageContainer className='relative z-10 text-darkGray dark:bg-black pb-32'>
                    <SectionSubtitle subtitle="What is EMDR?" className="mb-20 sm:mb-4" />
                    <div className='flex sm:flex-col flex-row items-center justify-between'>
                    
                        {/* Image Container */}
                        <div className='w-1/2 flex justify-start sm:h-1/2
                                        sm:w-11/12 '>
                            <Factory className='h-auto' />
                        </div>
                        
                        {/* Text Container */}
                        <div className='w-1/2 flex items-center pl-10
                                        sm:w-full sm:pl-0'>
                            <div className='sm:text-left text-left dark:text-white leading-loose font-light sm:text-sm'>
                                <p className='leading-loose'>You can expect a professional, supportive, and secure environment for healing, accessible from the comfort of your home.</p> 
                                <p>Sessions are conducted via a secure video conferencing platform, ensuring privacy and convenience. 
                                </p>
                                <p>Your therapist will guide you through the EMDR process, 
                                    using virtual tools for bilateral stimulation, and provide personalized support as you work through traumatic memories. 
                                </p>
                                <br />
                                <p>The online setting offers flexibility in scheduling and eliminates the need for travel, making it easier to fit therapy into your busy life.</p>
                                <p>During EMDR, you'll focus on a distressing memory while the therapist directs your eye movements or uses other bilateral stimulation, such as hand tapping. 
                                <p>This is thought to mimic the natural way your brain processes memories during sleep.</p> 
                                </p>
                                <p>The goal is to change how these memories are stored in your brain, 
                                    reducing their ability to cause distress.
                                </p>
                            </div>
                        </div>
                     </div>
                </PageContainer>
            </section>

            <section>
                <div className="flex justify-center items-center py-10 dark:bg-black">
                    <QuoteBox 
                        qoute="The goal of EMDR therapy is trait change so that the negative emotions and sensations will no longer habitually arise." 
                        author="Francine Shapiro, Florence W. Kaslow & Louise Maxfield"
                    />
                </div>
            </section>

            <section>
                <PageContainer className='text-darkGray dark:bg-black pb-28'>
                    <SectionSubtitle subtitle="Is EMDR Right For ME?" className="items-center mb-20 sm:mb-4" />
                    <div className='flex sm:flex-col-reverse md:flex-row items-center justify-between'>

                        {/* Text Container */}
                        <div className='w-7/12 flex items-start text-darkGray pr-10 sm:w-full'>
                            <div className='sm:text-center text-left dark:text-white leading-loose font-light'>
                                <div className='sm:text-left text-left dark:text-white leading-loose sm:text-sm'>
                                    <p className='leading-loose font-light'>Most people associate trauma with harrowing events like war or a natural disaster. 
                                    However, any distressing event that falls beyond the scope of normal human experience can be considered traumatic.<br /> 
                                    Evidence now concludes that repeated exposure to little “t” traumas can cause more emotional harm than exposure to a 
                                    single big “T” traumatic event.</p>
                                    <br />
                                    <p className='leading-loose font-light'>Empathy and acceptance for the impact of little “t” traumas can be harder to garner 
                                    because of the common misconception that these events are less significant than life-threatening emergencies. Minimizing 
                                    the impact of these little “t” incidents can create adverse coping behaviors such as bottling up emotions or attempting 
                                    to manage symptoms without support.</p>
                                    <br/ >
                                    <p className='leading-loose font-light'>If you have had any little t trauma, EMDR could be a great fit for you. It can 
                                    decrease the feelings of depression, anxiety, OCD, and PTSD.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Image Container */}
                        <div className='w-5/12 flex justify-end sm:justify-center sm:w-10/12 sm:py-5'>
                            <GirlsPuzzle className='h-auto'/>
                        </div>
                    </div>
                </PageContainer>
            </section>
            <FooterNew />
        </>
    );
}

export default EMDR;
