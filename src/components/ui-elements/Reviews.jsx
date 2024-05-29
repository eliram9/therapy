import React from 'react'

import ReviewCard from './ReviewCard'
import Moshe from '../../media/moshe.jpg'
import John from '../../media/john.jpeg'
import Shula from '../../media/shula.jpeg'
import Dave from '../../media/dave.jpeg'


const Reviews = () => {
    return (
        <div>
            <div className="flex justify-center items-center flex-col my-8 poppins">
                <h2 className="text-2xl font-semibold text-main relative dark:text-white">Our Clients Say</h2>
                <div style={{ height: '3px', background: '#333', width: '7%' }}></div>
            </div>
            <div className='w-full flex justify-center items-center py-4'>
                <div className='w-full flex justify-evenly items-center'>
                    <ReviewCard name="Moshe Cohen" 
                                image={Moshe}
                                title="Potomac, MD"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                      Tristique magna sit amet purus. Cras fermentum odio eu feugiat pretium nibh. Congue quisque egestas diam in arcu cursus." 
                    />
                    <ReviewCard name="John Smith" 
                                image={John} 
                                title="Ashdod, Israel"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                    />
                    <ReviewCard name="Shula Levi" 
                                image={Shula}
                                title="Washington, DC"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore,
                                magna sit amet purus."
                    
                    />
                    <ReviewCard name="Dave Larry" 
                                image={Dave}
                                title="Arlington, VA"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore,
                                magna sit amet purus."
                    />
                </div>
            
            </div>
        </div>
    )
}

export default Reviews
