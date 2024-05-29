import React from 'react';

const ReviewCard = ({ title, href, icon: IconComponent, className, border, bg, name, text, image }) => {
    return (
        <div className={`flex flex-col justify-center items-center shadow-lg rounded-lg w-80 h-[250px] p-4 border-[2px] text-darkGray border-gray-100 ${border} ${bg}
                        hover:border-mint hover:text-main hover:bg-gradient-to-b from-mint to-white transition-all relative
                        hover:scale-105 transform ease-in-out duration-700 will-change-transform
                      `}
            style={{ backfaceVisibility: 'hidden' }}
        >
            <div className='flex justify-center items-center w-full'>
                <div className='absolute -top-8'>
                    <img src={image} alt='client' width={60} className='rounded-full mx-auto' />
                </div>
            </div>
            <div className='w-full absolute top-12 text-sm px-4'>
                {text}
            </div>
            <div className='w-full flex flex-col justify-start items-start mt-2 absolute bottom-5 left-4'>
                <p className='truncate mt-2'>{name}</p>
                <p className='text-xs text-gray-500'>{title}</p>
            </div>
            
        </div>
    );
}

export default ReviewCard;
