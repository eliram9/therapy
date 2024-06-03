import React from 'react';

import { Link } from 'react-router-dom'
import { Bulb, Calendar, FQA, Puzzle } from '../../media/icons'

const ServiceCard = ({ title, href, icon: IconComponent, className, border, bg }) => {
    return (
        <Link to={href} className={`flex flex-col justify-center items-center shadow-lg rounded-lg w-52 h-[170px] p-4 border-[2px] bg-gradient-to-b from-mint to-white ${border} ${bg}
                        hover:border-main hover:text-main hover:bg-gradient-to-b from-mint to-white transition-all relative
                        hover:scale-105 transform ease-in-out duration-700 will-change-transform
                        sm:mb-5 sm:w-48 md:mb-10`
                        }
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
        <div>
            <div className="flex flex-col my-8 ml-20 poppins">
                <h2 className="text-2xl font-semibold text-main relative dark:text-white">Services Category</h2>
                <div style={{ height: '3px', background: '#333', width: '6%' }}></div>
            </div>
            <div className='w-full h-auto flex flex-wrap justify-evenly text-main text-sm'>
                <ServiceCard title="APPOINTMENT" href="/contact-us" border="border-mint" icon={() => <Calendar />} />
                <ServiceCard title="FQA" href="/contact-us" border="border-mint" icon={() => <FQA />} />
                <ServiceCard title="PROCESS" href="/contact-us" border="border-mint" icon={() => <Puzzle />} />
                <ServiceCard title="RESOURCES" href="/contact-us" border="border-mint" icon={() => <Bulb />} />
            </div>
        </div>
    )
}

export default ServicesSection
