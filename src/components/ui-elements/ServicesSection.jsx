import React from 'react';

import { Link } from 'react-router-dom'
import { Bulb, Calendar, FQA, Puzzle } from '../../media/icons'

const ServiceCard = ({ title, href, icon: IconComponent, className, border, bg }) => {
    return (
        <Link to={href}
              className={`flex flex-col justify-center items-center shadow-lg rounded-lg w-52 h-[170px] p-5 border-[2px] text-main ${border} ${bg} transition-all relative transform ease-in-out duration-700 will-change-transform 
                        sm:w-40 sm:h-36 sm:text-sm sm:mb-4
                        md:w-40 md:h-36 md:text-sm
                        bg-gradient-to-b from-mint to-white 
                        hover:bg-gradient-to-b hover:from-lightBanana hover:to-white 
                        hover:border-banana hover:text-main hover:scale-105`}
              style={{ backfaceVisibility: 'hidden' }}
        >
            <div className='mb-2'>
                {IconComponent()}
            </div>
            <div className='truncate mt-2'>{title}</div>
        </Link>
    );
}

const ServicesSection = () => {
    return (
        <div className='py-5 poppins mt-10 mb-20'>
            <div className="flex flex-col">
                <h2 className="text-2xl font-semibold text-main relative dark:text-white">Services Category</h2>
                <div style={{ height: '3px', background: '#333', width: '100px' }}></div>
            </div>
            <div className='mt-20 sm:grid sm:grid-cols-2 sm:gap-4 justify-items-center flex justify-between items-center gap-6'>  {/* Adjusted grid layout and added flex for md screens */}
                <ServiceCard title="APPOINTMENT" href="/contact-us" border="border-mint" icon={() => <Calendar />} />
                <ServiceCard title="FQA" href="/contact-us" border="border-mint" icon={() => <FQA />} />
                <ServiceCard title="PROCESS" href="/contact-us" border="border-mint" icon={() => <Puzzle />} />
                <ServiceCard title="RESOURCES" href="/contact-us" border="border-mint" icon={() => <Bulb />} />
            </div>
        </div>
    )
}

export default ServicesSection
