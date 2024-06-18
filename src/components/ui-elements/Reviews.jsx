import React from 'react';
import EmblaCarousel from './EmblaCarousel';

const Reviews = () => (
    <div className="w-full my-10 mb-40">
        <div className="flex flex-col mb-20">
            <h2 className="text-2xl font-semibold text-main relative dark:text-white">Services Category</h2>
            <div style={{ height: '3px', background: '#333', width: '100px' }}></div>
        </div>
        <EmblaCarousel />
    </div>
);

export default Reviews;
