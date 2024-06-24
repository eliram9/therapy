import React from 'react';
import PageContainer from '../ui-elements/PageContainer';
import ContactForm from '../ui-elements/ContactForm';
import { SendingEmail, BBackground } from '../../media/icons';
import Footer from '../Footer';


const Contact = () => {
    return (
        <>
            <section className=''>
                {/* <section className='bg-gradient-to-b from-mint to-lightGray'> */}
                
                <PageContainer className='relative z-10 text-darkGray dark:bg-black pb-40'>
                    <h1 className='text-4xl font-4xl font-semibold mb-8 dark:text-white flex justify-center
                                   sm:text-xl my-8'
                    
                    >
                        Ask Me Anything
                    </h1>
                    <div className='flex sm:flex-col-reverse md:flex-row items-center justify-between'>
                        {/* Text Container */}
                        <div className='w-7/12 flex items-center text-darkGray pr-10
                                        sm:w-full lg:pr-0'
                        >
                            <ContactForm />
                        </div>
                        
                        {/* Image Container */}
                        <div className='w-5/12 flex justify-center
                                        sm:w-full '
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
