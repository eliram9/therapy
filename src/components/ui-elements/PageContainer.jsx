import React from 'react'

const PageContainer = ({ className, children }) => {
    return (
        <div className={`flex justify-center px-4 w-full h-auto ${className}`} >
            <main className='w-[1650px]'>
                {children}
            </main>
        </div>
    )
}

export default PageContainer
