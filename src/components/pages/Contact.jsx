import React from 'react';

import PageContainer from '../ui-elements/PageContainer';
import ContactForm from '../ui-elements/ContactForm';
import SectionSubtitle from '../ui-elements/SectionSubtitle';
import { SendingEmail, BBackground } from '../../media/icons';
import Footer from '../Footer';


const Contact = () => {
    return (
        <>
            <section>
                {/* <section className='bg-gradient-to-b from-mint to-lightGray'> */}
                
                <PageContainer className='relative z-10 text-darkGray dark:bg-black pb-40'>
                    <SectionSubtitle subtitle="Ask Me Anything" className="sm:my-10" />
                    <div className='flex sm:flex-col-reverse md:flex-row items-center justify-between'>
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
                            <SendingEmail />
                        </div>
                    </div>
                </PageContainer>
            </section>
            <Footer />
        </>
    );
}

export default Contact;
