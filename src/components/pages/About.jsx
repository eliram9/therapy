import React from 'react'
import PageContainer from '../ui-elements/PageContainer'
import TextCard from '../ui-elements/TextCard'
import Ari from '../../media/Ari.svg'
import { Factory, HeroBackground, HeroGrayBackground } from '../../media/icons';

const About = () => {
    return (
        <>
            <div className='w-full'>
                <PageContainer>
                    <div className='w-full h-[500px] flex justify-evenly items-center'>
                        <div className='w-1/2'>
                            <TextCard title="Hi, I'm Arianne" 
                                      text="I am a licensed certified social worker – clinical in Maryland and Virginia. I offer individual psychotherapy to adults ages 18 and over. All services are being provided currently via telehealth."
                            />
                        </div>
                        <div className=''>
                            <img src={Ari} alt='Arianne' />
                        </div>
                    </div>
                </PageContainer>

                {/* <div className='relative w-full overflow-hidden flex items-end justify-center'>
                    <HeroGrayBackground />
                    <PageContainer className="z-10">
                        <div className='flex justify-evenly items-center'>
                        <div className='w-1/2'>
                                <Factory />
                            </div>
                            <div className='w-1/2 pl-10'>
                                <TextCard title="What is EMDR?" 
                                          text="The brain can be viewed as a filing cabinet, where each memory is organized under tabs of related themes. 
                                                However, when a memory is traumatic, it occasionally fails to find its proper place in the system. Instead, 
                                                it remains like an unresolved pile of paperwork atop your desk, constantly in your line of sight, persistently 
                                                nagging and provoking distress due to its unresolved nature. This is when we often have emotional outbursts 
                                                or strong anxiety that feels unavoidable. EMDR can be utilized, aiding the brain's natural healing process by 
                                                effectively organizing and processing these unresolved memories."
                                />
                            </div>
                            
                        </div>
                    </PageContainer>
                </div> */}
            </div>
        </>
    )
}

export default About;
