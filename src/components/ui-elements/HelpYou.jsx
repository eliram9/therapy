import React from 'react';
import { HelpingHand } from '../../media/icons';


const HelpYou = () => {
    return (
        <div className='my-5 poppins'>
            <div className='flex justify-between items-center'>
                <div className='w-1/2 flex justify-center'>
                    <HelpingHand />
                </div>
                <div className='w-1/2'>
                    <h2 className="text-2xl font-semibold text-main relative dark:text-white">How Can I Help You?</h2>
                    <div style={{ height: '3px', background: '#333', width: '12%', marginBottom: '36px' }}></div>
                    <p className='text-main leading-loose dark:text-white'>When life becomes too much to handle, you might know what you need to do logically to make things better, but 
                        actually starting can feel pretty scary. And when you're stuck in a loop of negative thoughts and bad habits, 
                        it's hard to shake off the guilt and move forward. You understand your struggles and story better than anyone 
                        else and I'm here to work alongside you to restore your calm.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HelpYou;