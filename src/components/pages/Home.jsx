import React from 'react';

import PageContainer from '../ui-elements/PageContainer';
import ServicesSection from '../ui-elements/ServicesSection';
import Hero from '../ui-elements/Hero';
import HelpYou from '../ui-elements/HelpYou';
import { YellowShape } from '../../media/icons';


const Home = () => {
    return (
        <section className="bg-lightGray dark:bg-zinc-700">
            <Hero />
            <ServicesSection />
            <PageContainer>
            
            <HelpYou />
            </PageContainer>
        </section>  
    )
}

export default Home
