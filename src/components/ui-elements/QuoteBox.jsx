import React from 'react'
import { Qoutes } from '../../media/icons'

const QouteBox = ({ qoute, author }) => {
    return (
        <div>
            <div style={{ boxShadow: '10px 10px 50px -30px rgba(0, 0, 0, 0.6)' }} className='w-[1200px] h-auto flex flex-col justify-center rounded-xl items-center relative poppins text-black'>
                <Qoutes className='w-40 absolute -left-10 top-[-48%]'/>
                <h3 className='text-2xl font-thin mb-4 italic pt-8 px-16 text-center z-10'>{qoute}</h3>
                <h4 className='text-center mb-8'>{author}</h4>
            </div>
        </div>
    )
}

export default QouteBox
