import React from 'react'

import { Arrow, Envelope, Logo, Phone, Danger } from '../media/icons';
import Pot from '../media/pot.gif'; 

const firstH3 = {
    backgroundImage: 'linear-gradient(to right, #124C5F, #C7E7E1, #EBA8BF)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    display: 'inline',
    fontSize: '25px',
    fontWeight: 600,
}

const secondH3 = {
    backgroundImage: 'linear-gradient(to right, #EBA8BF, #C7E7E1, #124C5F )',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    display: 'inline',
    fontSize: '25px',
    fontWeight: 600

}

const Footer = () => {
     const currentYear = new Date().getFullYear();

    return (
        <footer className="text-main text-center bottom-0 w-full py-5 bg-gradient-to-b from-lightGray to-blue poppins">    
            <div className='w-full pt-[150px] justify-center bg-gradient-to-b from-lightGray to-blue relative z-20 py-0'>
                <div className="grid grid-cols-2 gap-4">
                    <div className='flex justify-center items-center'>
                        <Logo className=' h-10' />
                        <div className='flex flex-col ml-10 text-sm items-start'>
                            <p className='leading-5'>About</p>
                            <p className='leading-5'>EMDR</p>
                            <p className='leading-5'>Resources</p>
                        </div>   
                    </div>
                    
                    <div className='flex justify-center'>
                        <div className='flex flex-col ml-10 text-sm items-start'>
                            <div className='flex items-center'>
                                <Phone fill="#124C5F"/>
                                <p className='leading-10'>+1 (301)-337-5676</p>
                            </div>
                            <div className='flex items-center'>
                                <Envelope fill="#124C5F"/>
                                <p className='leading-10'>info@bigbrain.com</p>         
                            </div>
                        </div>   
                    </div>
                </div> 

                <div className='flex justify-center absolute -top-6 left-1/2 transform -translate-x-1/2'>
                    <div className='w-[1120px] bg-white flex justify-between rounded-xl drop-shadow-lg border-white border border-opacity-20 px-16 py-8'>
                        <div className='flex flex-col items-start'>
                            <h3 style={firstH3}>Ready to get started?</h3>
                            <h3 style={secondH3}>Talk to us today</h3>
                        </div>
                        <div className='flex items-center text-white'> 
                            <button className='bg-main text-sm py-2 px-4 rounded-xl flex items-center'>I'm ready
                                <span><Arrow /></span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='flex h-auto justify-center items-end py-5 z-20'>
                    <div className='w-[1400px] py-7 px-5 leading-10 border border-red-200 rounded-xl bg-white bg-opacity-[35%]'>
                        <div className='flex justify-center mb-2'>
                            <Danger fill='#fda4af' />
                        </div>
                        <p className='leading-10 font-medium text-sm'>Amma Lucy LLC and or BigBrain is not a crisis facility.</p>
                        <p className='font-medium text-sm'>Amma Lucy LLC and or BigBrain does not provide emergency services.</p>
                        <p className='leading-5 font-light text-sm'>If you or someone you know is experiencing a mental health crisis, please call or text 988 at any 
                            time to be connected to a trained crisis counselor. If you’re looking to find an incredible therapist 
                            for ongoing proactive mental health care, you got to the right place, take a deep breath and get 
                            connected today!.</p>
                    </div>           
                </div>

                <div className=''>
                    <p className="text-xs">© {currentYear} All rights reserved to Amma Lucy LLC 
                        <span className='mx-1'>|</span> 
                            eliram9 & shoshana
                    </p>
                </div>
                {/* <div className='absolute -right-12 top-12 -z-10'>
                    <img src={Pot} className='w-[500px]'/>
                </div> */}
            </div>
        </footer>
    );
}

export default Footer
