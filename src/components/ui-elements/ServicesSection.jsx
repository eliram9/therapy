import React from 'react';

import { Link } from 'react-router-dom'
import { Bulb, Calendar, FQA, Puzzle } from '../../media/icons'

const Card = ({title, href, icon: IconComponent, className }) => {
    return (
        <Link to={href} className={`flex flex-col justify-center items-center shadow-lg rounded-md w-32 h-[170px] p-4 border-[1px] border-main ${className}`}>
            <div className='mb-2'>
                {IconComponent()}
            </div>
            <div className='truncate mt-2'>{title}</div>
        </Link>
    );
}

const ServicesSection = () => {
    return (
        <div>
            <div className='w-full h-auto flex justify-evenly bg-lightGray text-main text-sm'>
                <Card title="APPOINTMENT" href="/contact-us" icon={() => <Calendar />} className='border-mint' />
                <Card title="FQA" href="/contact-us" icon={() => <FQA />} className='border-banana bg-gradient-to-b from-lightBanana to-white' />
                <Card title="PROCESS" href="/contact-us" icon={() => <Puzzle />} className='border-mint' />
                <Card title="RESOURCES" href="/contact-us" icon={() => <Bulb />} className='border-banana bg-gradient-to-b from-lightBanana to-white' />
            </div>
        </div>
    )
}

export default ServicesSection
