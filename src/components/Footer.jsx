import React from 'react'

const Footer = () => {
     const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-lightGray text-main text-center p-4 bottom-0 w-full">
            <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-10 xs:block">
                    <div className='bg-banana'>01</div>
                    <div className='bg-blue'>02</div>
                    <div className='bg-main text-white'>03</div>
                </div>
                <hr />
                <div className='py-3 mt-4'>
                    <p className="text-sm">© {currentYear} All rights reserved to Amma Lucy LLC 
                        <span className='text-lg mx-1'>|</span> 
                            eliram9 & shoshana
                    </p>
                </div>
            </div>
            <div className='w-full text-gray rounded-lg mt-3'>
                <p className='py-3 px-5 rounded-lg bg-red font-semibold text-sm text-black'>Amma Lucy LLC / Therapy is not a crisis facility. Therapy does not provide emergency services. If you or someone you know is experiencing a mental health crisis, 
                   please call or text 988 at any time to be connected to a trained crisis counselor. If you’re looking to find an incredible therapist for ongoing proactive mental health care, 
                   you got to the right place, take a deep breath and get connected today!</p>
            </div>
        </footer>
    );
}

export default Footer
