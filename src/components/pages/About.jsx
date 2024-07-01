import React from 'react'

import PageContainer from '../ui-elements/PageContainer'
import Ari from '../../media/Ari.svg'

import { Conversation, Payment } from '../../media/icons';
import QouteBox from '../ui-elements/QuoteBox';
import SectionSubtitle from '../ui-elements/SectionSubtitle';
import FooterNew from '../FooterNew';

const About = () => {
    return (
        <>
            <section className=''>
                <PageContainer className='dark:bg-black '>
                    <div className='flex sm:flex-col-reverse md:flex-row items-center justify-between'>
                        {/* Text Container */}
                        <div className='w-4/6 flex items-start text-black
                                        sm:w-full'>
                            <div className='sm:text-center text-left dark:text-white'>
                                <h1 className='text-4xl font-4xl font-semibold mb-8'>Hi, I'm Arianne</h1>
                                <p className='leading-relaxed'>I’m glad that we’ve found each other. I am a licensed certified social worker – clinical in Maryland, Virginia, and Arizona.</p>
                            </div>
                        </div>
                        
                        {/* Image Container */}
                        <div className='w-2/6 flex justify-end
                                        sm:w-full'>
                            <img src={Ari} alt='Arianne' className='mx-auto' />
                        </div>
                    </div>
                </PageContainer>
            </section>

            <section className='dark:bg-black pt-10'>
                <PageContainer className='text-darkGray flex justify-end w-full text-left leading-relaxed 
                                         lg:text-sm xl:text-md 2xl:text-base 3xl:text-xl dark:text-white dark:font-light'>
                    <p>I offer individual psychotherapy to adults ages 18 and over and have been partnering with individuals for 12 years, navigating the challenges, celebrating the victories, 
                       and working towards the life each person hopes for themselves.
                    </p>
                    <p>When life becomes too much to handle, you might know what you need to do logically to make things better, 
                       but actually starting can feel scary. 
                    </p>When you’re stuck in a loop of negative thoughts and bad habits, it’s hard to shake off the shame and move forward. You understand 
                       your struggles and story better than anyone else and I’m here to work alongside you to restore your calm. With specialized training in EMDR and CBT, I bring a wealth of 
                       experience and a range of therapeutic toools to our sessions, but it’s the connection between us that truly fosters healing and growth. 
                    <p>With my own mental My own mental 
                       health experience has taught me resilience, compassion, and the profound strength of the human spirit.
                    </p>
                       I offer you a space of non-judgment, empathy, and authentic connection. 
                    <p>
                        If you’re seeking a therapist who believes in the power of the mind, who listens deeply, and who is committed to seeing you thrive, I invite you to reach out. 
                       This can be the start of healing for your past, present and future.  All services are being provided currently via telehealth.
                    </p>
                </PageContainer>
            </section>

            <div className='flex justify-center py-32 dark:bg-black'>
                <QouteBox author="ari the jew" qoute="Give me your money bitches, no insurance you cheap fuckers" />
            </div> 
            

            <section>
                <PageContainer className='text-darkGray dark:bg-black pb-32'>
                    <SectionSubtitle subtitle="What To Expect?" className="mb-20 sm:mb-4" />
                    <div className='flex sm:flex-col flex-row items-center justify-between'>
                    
                        {/* Image Container */}
                        <div className='w-5/12 flex justify-center xs:mb-4 md:mb-0
                                        sm:w-5/6'>
                            <Conversation className='h-auto'/>
                        </div>
                        
                        {/* Text Container */}
                        <div className='w-7/12 flex items-center pl-10
                                        sm:w-full sm:pl-0'>
                            <div className='sm:text-left text-left dark:text-white leading-relaxed font-light sm:text-sm'>
                                <p className='leading-relaxed'>You can expect a professional, supportive, and secure environment for healing, accessible from the comfort of your home.</p> 
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
                    <PageContainer className='text-darkGray dark:bg-black pb-28'>
                        <SectionSubtitle subtitle="Payment and Scheduling" className="items-center mb-20 sm:mb-4" />
                        <div className='flex sm:flex-col-reverse md:flex-row items-center justify-between'>

                            {/* Text Container */}
                            <div className='w-7/12 flex items-start text-darkGray pr-10 sm:w-full'>
                                <div className='sm:text-center text-left dark:text-white leading-relaxed font-light'>
                                    <div className='sm:text-left text-left dark:text-white leading-relaxed sm:text-sm'>
                                        <p className='leading-relaxed font-light'>
                                            Please note that I am not part of any insurance panels and am therefore considered an
                                            “out-of-network provider.” If you wish to be reimbursed by your insurance carrier, please contact your insurance provider to determine
                                        </p>
                                        <ul className='font-normal'>
                                            <li>(1) the type and amount of mental health coverage available to you</li>
                                            <li>(2) the coverage for out of network providers</li>
                                            <li>(3) if there is an annual deductible you must meet</li>
                                            <li>(4) and if a note from your physician is required indicating your need for therapy</li>
                                        </ul>
                                        <br />
                                        <p>
                                            <span className='text-main font-medium'>*</span>
                                            Please note, I will provide you a superbill after each session with the following information 
                                            that you can submit to your insurance company for reimbursement for any out-of-network benefits you might have:
                                        </p>
                                        <ul className='font-normal'>
                                            <li>(1) the type and amount of mental health coverage available to you</li>
                                            <li>(2) the coverage for out of network providers</li>
                                            <li>(3) if there is an annual deductible you must meet</li>
                                            <li>(4) and if a note from your physician is required indicating your need for therapy</li>
                                        </ul>
                                        <br />
                                        <p>
                                            Appointment Information
                                            I offer individual psychotherapy to adults ages 18 and over in English.
                                            At this time, I am exclusively offering daytime telehealth services.
                                            You can schedule a 20 minute free consultation or schedule an appointment directly on my calendar through this link.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Image Container */}
                            <div className='w-5/12 flex justify-end sm:justify-center sm:w-11/12'>
                                <Payment className='h-auto'/>
                            </div>
                        </div>
                    </PageContainer>
                </section>
            <FooterNew />     
        </>
    )
}

export default About;
