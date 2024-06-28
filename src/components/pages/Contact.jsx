import React from 'react';
import PageContainer from '../ui-elements/PageContainer';
import ContactForm from '../ui-elements/ContactForm';
import SectionSubtitle from '../ui-elements/SectionSubtitle';
import { SendingEmail } from '../../media/icons';
import BackgroundSVG from '../../media/contact-bg.svg';
import ContactFooter from '../ContactFooter';

const Contact = () => {
    return (
        <>
            <section className="relative">
                <PageContainer className='relative z-10 text-darkGray dark:bg-black pb-40'>
                    <SectionSubtitle subtitle="Ask Me Anything" className="sm:my-10" />
                    
                    {/* Background container for form and image */}
                    <div className="relative">
                        {/* SVG Background */}
                        <div 
                            className='absolute inset-0 w-full h-full blur-lg'
                            style={{
                                backgroundImage: `url(${BackgroundSVG})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        />
                        
                        {/* Content */}
                        <div className='relative z-10 flex sm:flex-col-reverse md:flex-row items-center justify-between p-6'>
                            {/* Text Container */}
                            <div className='w-7/12 flex items-center text-darkGray pr-10
                                            sm:w-full lg:pr-0'
                            >
                                <ContactForm />
                            </div>
                            
                            {/* Image Container */}
                            <div className='w-5/12 flex justify-center
                                            sm:w-4/6 sm:h-fit sm:pb-3'
                            >
                                <SendingEmail className='h-2/4' />
                            </div>
                        </div>
                    </div>
                </PageContainer>
            </section>
            <ContactFooter />
        </>
    );
}

export default Contact;