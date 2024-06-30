import React from 'react';

import PageContainer from '../ui-elements/PageContainer';
import ServicesSection from '../ui-elements/ServicesSection';
import Hero from '../ui-elements/Hero';
import HelpYou from '../ui-elements/HelpYou';
import { YellowShape } from '../../media/icons';
import Reviews from '../ui-elements/Reviews';
import Footer from '../Footer';
import FooterNew from '../FooterNew';


const Home = () => {
    return (
        <section className="w-full h-scree">
        {/* <section className="w-full h-screen bg-gradient-to-b from-mint to-white"> */}
            <Hero />
            <PageContainer>
                <ServicesSection />
                <HelpYou />
                <Reviews /> 
            </PageContainer>
            {/* <Footer /> */}
            <FooterNew />
        </section>  
    )
}

export default Home
