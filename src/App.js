import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from './components/Home'
import OurStory from './components/OurStory';
import Resources from './components/Resources';
import ContactUs from './components/ContactUs';
import Explanation from './components/Explanation';
import Footer from './components/Footer';

function App() {
    return (
        <div className='flex flex-col min-h-screen dark:bg-sky-950'>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/our-story" element={<OurStory />} />
                <Route path="/explanation" element={<Explanation />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
            <Footer className="mt-auto" />
        </div>
        
    );
}

export default App;
