import React from 'react'

import PageContainer from '../ui-elements/PageContainer'
import Ari from '../../media/Ari.svg'

import { Factory, HeroBackground, HeroGrayBackground, Payment } from '../../media/icons';
import QouteBox from '../ui-elements/QuoteBox';

const About = () => {
    return (
        <>
            <section className=''>
                <PageContainer className='dark:bg-black bg-gradient-to-b from-mint to-white'>
                    <div className='flex sm:flex-col-reverse md:flex-row items-center justify-between'>
                        {/* Text Container */}
                        <div className='w-4/6 flex items-start text-main
                                        sm:w-full'>
                            <div className='sm:text-center text-left  dark:text-white'>
                                <h1 className='text-4xl font-4xl font-semibold mb-8'>Hi, I'm Arianne</h1>
                                <p className='leading-loose'>I’m glad that we’ve found each other. I am a licensed certified social worker – clinical in Maryland, Virginia, and Arizona.</p>
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
                <PageContainer className='text-darkGray flex justify-end w-full text-left leading-loose 
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

            {/* <QuoteBox author="ari ari" qoute="Put some shit here" /> */}
            {/* <div className='flex justify-center py-32 dark:bg-black'>
                <QouteBox author="ari the jew" qoute="Give me your money bitches, no insurance you cheap fuckers" />
            </div> */}
            

            <section>
            
            <PageContainer className='text-darkGray dark:bg-black'>
            <h1 className='text-4xl font-4xl font-semibold mb-8 dark:text-white'>What to Expect?</h1>
                <div className='flex sm:flex-col flex-row items-center justify-between'>
                
                {/* Image Container */}
                <div className='w-2/6 flex justify-center xs:mb-4 md:mb-0
                                sm:w-full'>
                    <Payment />
                </div>
                
                {/* Text Container */}
                <div className='w-4/6 flex items-center pl-10
                                sm:w-full sm:pl-0'>
                <div className='sm:text-center text-left  dark:text-white leading-loose dark:font-light'>
                                <p className='leading-loose'>you can expect a professional, supportive, and secure environment for healing, accessible from the comfort of your home.</p> 
                                <p>Sessions are conducted via a secure video conferencing platform, ensuring privacy and convenience. Your therapist will guide you through the EMDR process, 
                                    using virtual tools for bilateral stimulation, and provide personalized support as you work through traumatic memories. 
                                </p>
                                <br />
                                <p>The online setting offers flexibility in scheduling and eliminates the need for travel, making it easier to fit therapy into your busy life.</p>
                                <p>During EMDR, you'll focus on a distressing memory while the therapist directs your eye movements or uses other bilateral stimulation, such as hand tapping. 
                                    This is thought to mimic the natural way your brain processes memories during sleep. 
                                </p>
                                <p>The goal is to change how these memories are stored in your brain, 
                                    reducing their ability to cause distress.
                                </p>
                            </div>
                </div>
                
                </div>
            </PageContainer>


                {/* <PageContainer className='text-darkGray dark:bg-black'>
                <h1 className='text-4xl font-4xl font-semibold mb-8 dark:text-white'>What to Expect?</h1>

                    <div className='flex sm:flex-col-reverse md:flex-row items-center justify-between'> */}

                        {/* Image Container */}
                        {/* <div className='w-1/2 flex justify-center
                                        sm:w-full'>
                            <Payment />
                        </div> */}
                        {/* Text Container */}
                        {/* <div className='w-1/2 flex items-start
                                        sm:w-full'>
                            <div className='sm:text-center text-left  dark:text-white leading-loose dark:font-light'>
                                <p className='leading-loose'>you can expect a professional, supportive, and secure environment for healing, accessible from the comfort of your home.</p> 
                                <p>Sessions are conducted via a secure video conferencing platform, ensuring privacy and convenience. Your therapist will guide you through the EMDR process, 
                                    using virtual tools for bilateral stimulation, and provide personalized support as you work through traumatic memories. 
                                </p>
                                <br />
                                <p>The online setting offers flexibility in scheduling and eliminates the need for travel, making it easier to fit therapy into your busy life.</p>
                                <p>During EMDR, you'll focus on a distressing memory while the therapist directs your eye movements or uses other bilateral stimulation, such as hand tapping. 
                                    This is thought to mimic the natural way your brain processes memories during sleep. 
                                </p>
                                <p>The goal is to change how these memories are stored in your brain, 
                                    reducing their ability to cause distress.
                                </p>
                            </div>
                        </div> */}
                            
                        
                    {/* </div>
                </PageContainer> */}

                {/* <div className='w-full text-darkGray my-20'>
                    <div className='relative w-full overflow-hidden flex justify-center h-auto '>
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
                </div> */}
            </section>
        </>
    )
}

export default About;
