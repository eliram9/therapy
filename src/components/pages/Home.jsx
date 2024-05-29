import React from 'react';

import PageContainer from '../ui-elements/PageContainer';
import ServicesSection from '../ui-elements/ServicesSection';
import Hero from '../ui-elements/Hero';
import HelpYou from '../ui-elements/HelpYou';
import { YellowShape } from '../../media/icons';
import Reviews from '../ui-elements/Reviews';


const Home = () => {
    return (
        <section className="bg-lightGray dark:bg-zinc-700">
            <Hero />
            <PageContainer>
                <ServicesSection />
                <HelpYou />
                <Reviews />
            </PageContainer>
        </section>  
    )
}

export default Home
