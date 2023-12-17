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
        </footer>
    );
}

export default Footer
