import React from 'react';
import PageContainer from '../ui-elements/PageContainer';
import TextCard from '../ui-elements/TextCard'; // This import doesn't seem to be used.
import { Factory, GirlsPuzzle, HeroGrayBackground, CC, Payment } from '../../media/icons';
import QuoteBox from '../ui-elements/QuoteBox';
import SectionSubtitle from '../ui-elements/SectionSubtitle';


const EMDR = () => {
    return (
        <>
            <section className="dark:bg-zinc-700">
                <div className='w-full text-black'>
                    <div className='relative w-full overflow-hidden flex items-center justify-center h-[700px]'>
                        <HeroGrayBackground />
                        <PageContainer className="z-10">
                            <div className='flex justify-between items-center'>
                                <div className='w-1/2 flex justify-center'>
                                    <Factory />
                                </div>
                                <div className='w-1/2 pl-10'>
                                    <div>
                                        <SectionSubtitle subtitle="What is EMDR?" className="mb-20" />
                                        <p className='leading-loose font-light'>The brain can be viewed as a filing cabinet, where each memory is organized under tabs of related themes. 
                                            However, when a memory is traumatic, it occasionally fails to find its proper place in the system.</p> 
                                            <br />
                                            <p className='leading-loose font-light'>Instead,  it remains like an unresolved pile of paperwork atop your desk, constantly in your line of sight, persistently 
                                            nagging and provoking distress due to its unresolved nature. This is when we often have emotional outbursts or 
                                            strong anxiety that feels unavoidable.</p> 
                                            <br/>
                                            <p className='leading-loose font-light'>EMDR can be utilized, aiding the brain's natural healing process by 
                                            effectively organizing and processing these unresolved memories.</p>
                                    </div>
                                </div>
                            </div>
                        </PageContainer>
                    </div>
                </div>
            </section>

            <section>
                <div className="flex justify-center items-center">
                    <QuoteBox 
                        qoute="The goal of EMDR therapy is trait change so that the negative emotions and sensations will no longer habitually arise." 
                        author="Francine Shapiro, Florence W. Kaslow & Louise Maxfield"
                    />
                </div>
            </section>

            <section>
                <div className='w-full text-darkGray'>
                    <div className='relative w-full overflow-hidden flex items-center justify-center h-[700px]'>
                        <PageContainer className="z-10">
                            <div className='flex justify-between items-center'>
                                <div className='w-1/2 pl-10'>
                                    <div>
                                        <h2 className='text-4xl font-4xl font-semibold mb-8 tracking-text'>Is EMDR Right for Me?</h2>
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
                                <div className='w-1/2 flex justify-center'>
                                    <GirlsPuzzle />
                                </div>
                            </div>
                        </PageContainer>
                    </div>
                </div>
            </section>

            

            {/* <section>
                <div className='w-full text-darkGray'>
                    <div className='relative w-full overflow-hidden flex justify-center h-[700px]'>
                        <PageContainer className="z-10">
                            <div className='flex justify-between items-center'>
                            <div className='w-1/2 flex justify-center'>
                                    <Payment />
                                </div>
                                <div className='w-1/2 pl-10'>
                                    <div>
                                        <h2 className='text-4xl font-4xl font-semibold mb-8 tracking-text'>Payment and Scheduling</h2>
                                        <p className='leading-loose font-light'>Please note that I am not part of any insurance panels and am therefore considered an
                                            “out-of-network provider.” If you wish to be reimbursed by your insurance carrier, please contact your insurance provider to determine
                                        </p>
                                        <ul className='leading-loose'>
                                            <li>(1) the type and amount of mental health coverage available to you</li>
                                            <li>(2) the coverage for out of network providers</li>
                                            <li>(3) if there is an annual deductible you must meet</li>
                                            <li>(4) and if a note from your physician is required indicating your need for therapy</li>
                                        </ul>
                                        <br />
                                        <p className='leading-loose font-light'>*Please note, I will provide you a superbill after each session with the following information 
                                            that you can submit to your insurance company for reimbursement for any out-of-network benefits you might have:
                                        </p>
                                        <ul className='leading-loose'>
                                            <li>(1) the type and amount of mental health coverage available to you</li>
                                            <li>(2) the coverage for out of network providers</li>
                                            <li>(3) if there is an annual deductible you must meet</li>
                                            <li>(4) and if a note from your physician is required indicating your need for therapy</li>
                                        </ul>
                                        <br />
                                        <p className='leading-loose font-light'>Appointment Information
                                            I offer individual psychotherapy to adults ages 18 and over in English.
                                            At this time, I am exclusively offering daytime telehealth services.
                                            You can schedule a 20 minute free consultation or schedule an appointment directly on my calendar through this link.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </PageContainer>
                    </div>
                </div>
            </section> */}
        </>
    );
}

export default EMDR;
