import React from 'react';

import { Link } from 'react-router-dom'
import { Bulb, Calendar, FQA, Puzzle } from '../../media/icons'

const Card = ({ title, href, icon: IconComponent, className }) => {
    return (
        <Link to={href} className={`flex flex-col justify-center items-center shadow-lg rounded-md w-52 h-[170px] p-4 border-[1px] border-main  border-mint hover:border-banana hover:bg-gradient-to-b from-lightBanana to-white transition-all`}>
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
            <div className="flex flex-col my-8 ml-20">
                <h2 className="text-2xl font-bold text-main relative">Services Category</h2>
                <div style={{ height: '3px', background: '#333', width: '6%' }}></div>
            </div>
            <div className='w-full h-auto flex justify-evenly bg-lightGray text-main text-sm'>
                <Card title="APPOINTMENT" href="/contact-us" icon={() => <Calendar />} />
                <Card title="FQA" href="/contact-us" icon={() => <FQA />} />
                <Card title="PROCESS" href="/contact-us" icon={() => <Puzzle />} />
                <Card title="RESOURCES" href="/contact-us" icon={() => <Bulb />} />
            </div>
        </div>
    )
}

export default ServicesSection
