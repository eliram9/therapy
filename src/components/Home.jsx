import React from 'react';

import PageContainer from './ui-elements/PageContainer';
import ServicesSection from './ui-elements/ServicesSection';


const Home = () => {
    return (
        <section className="bg-lightGray">
            <PageContainer>
            <ServicesSection />
            </PageContainer>
        </section>  
    )
}

export default Home
