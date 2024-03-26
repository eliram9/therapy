import React from 'react';

import PageContainer from '../ui-elements/PageContainer';
import ServicesSection from '../ui-elements/ServicesSection';
import Hero from '../ui-elements/Hero';


const Home = () => {
    return (
        <section className="bg-lightGray">
            <Hero />
            <PageContainer>
                
            <ServicesSection />
            </PageContainer>
        </section>  
    )
}

export default Home
