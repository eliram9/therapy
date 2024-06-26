import React, { useState } from 'react';

import { DownArrow, UpArrow } from '../../media/icons';


const ReviewCard = ({ title, name, text, image }) => {
    // if the card is expanded and display the full text
    const [isExpanded, setIsExpanded] = useState(false);

    const handleReadMoreClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`rounded-lg p-4 border-[2px] text-darkGray relative mx-4 
                        hover:border-mint
                        hover:text-main hover:bg-gradient-to-b from-mint to-white
                        ${isExpanded ? 'h-auto' : 'h-52'}` // Adjust height based on expanded state
        }>
            <div className='flex justify-center items-center'>
                <div className='absolute -mt-8'>
                    <img src={image} alt={name} width={50} className='rounded-full mx-auto' />
                </div>
            </div>

            {/* Adjust height based on expanded state */}
            <div className={`overflow-hidden ${isExpanded ? 'h-auto' : 'h-32'}`}>
                <p className='text-sm mt-6 dark:text-white'>
                    {isExpanded ? text : (text.length > 150 ? text.slice(0, 150) + '...' : text)}
                </p>
            </div>
            <div className='w-full flex justify-between items-center mt-2 mb-2'>
                <div className='flex flex-col justify-start items-start'>
                    <p className='truncate mt-2 text-main dark:text-white'>{name}</p>
                    <p className='text-xs text-gray-500 dark:text-mint mb-2'>{title}</p>
                </div>
                {text.length > 150 ? (
                    <button className='bg-lightGray text-darkGray border border-darkGray text-xs font-light rounded-full p-1' onClick={handleReadMoreClick}>
                        {isExpanded ? <UpArrow /> : <DownArrow /> }
                    </button>
                ) : null}
            </div>
        </div>
    );
}

export default ReviewCard;