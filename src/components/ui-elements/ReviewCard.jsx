import React from 'react';

const ReviewCard = ({ title, name, text, image }) => {
    return (
        <div className='h-52 rounded-lg p-4 border-[2px] text-darkGray relative mx-4 
                        hover:border-mint
                        hover:text-main hover:bg-gradient-to-b from-mint to-white'
        >
            <div className='flex justify-center items-center'>
                <div className='absolute -mt-8'>
                    <img src={image} alt={name} width={50} className='rounded-full mx-auto' />
                </div>
            </div>
            <div className='overflow-hidden h-32'>
                <p className='text-sm mt-6 dark:text-white'>
                    {text.length > 150 ? text.slice(0, 150) + '...' : text}
                </p>
            </div>
            <div className='w-full flex flex-col justify-start items-start mt-2 absolute bottom-5 left-4'>
                <p className='truncate mt-2 text-main dark:text-white'>{name}</p>
                <p className='text-xs text-gray-500 dark:text-mint'>{title}</p>
            </div>
        </div>
    );
}

export default ReviewCard;