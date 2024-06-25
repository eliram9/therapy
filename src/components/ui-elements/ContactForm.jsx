import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formInputs, setFormInputs] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send('service_7akd5q8', 'template_jl2z84d', formInputs, 'O9q0VZ9cLLSlaWNod')
      .then((result) => {
        console.log(result.text);
        // Handle success (e.g., showing a success message)
      }, (error) => {
        console.log(error.text);
        // Handle errors (e.g., showing an error message)
      });
  };

    return (
        <div className='p-10 w-full poppins sm:px-0 lg:px-0'>
            <form onSubmit={sendEmail} className='w-full font-light'>
                <div className='w-full grid grid-cols-2 gap-10 justify-center items-start text-md 
                                lg:text-sm sm:gap-3'
                >
                    <div className='w-full pb-10'>
                        <input type="text" 
                            name="first_name" 
                            value={formInputs.first_name} 
                            onChange={handleChange} 
                            required 
                            placeholder='First Name'
                            className='border-main border-2 rounded-md w-full px-2 p-2'
                        />
                    </div>
                    <div className='w-full pb-10'>
                        <input type="text" 
                            name="last_name" 
                            value={formInputs.from_name} 
                            onChange={handleChange} 
                            placeholder='Last Name'
                            required 
                            className='border-main border-2 rounded-md w-full px-2 p-2'
                        />
                    </div>
                </div>
                    
                <div className='w-full grid grid-cols-2 gap-10 justify-center items-start text-md
                                lg:text-sm sm:gap-3'
                >
                    <div className='w-full pb-10'>
                        <input type="email" 
                            name="email" 
                            value={formInputs.email} 
                            onChange={handleChange} 
                            placeholder='Email Address'
                            required 
                            className='border-main border-2 rounded-md w-full px-2 p-2'
                        />
                    </div>
                    <div className='w-full pb-10'>
                        <input type="number" 
                            name="phone" 
                            value={formInputs.phone} 
                            onChange={handleChange} 
                            placeholder='Phone Number'
                            required 
                            className='border-main border-2 rounded-md w-full px-2 p-2'
                        />
                    </div>
                </div>
                
                <div className='w-full pb-10'>  
                    <label htmlFor="message" className="block mb-1 text-sm font-light text-darkGray lg:text-sm dark:text-lightGray">Message (optional)</label>
                    <textarea name="message" 
                            value={formInputs.message} 
                            onChange={handleChange} 
                            rows={3}
                            className='border-main border-2 rounded-md w-full px-2 p-2 lg:text-sm'>
                    </textarea>
                </div>
                
                <button type="submit"
                        className='w-full bg-main text-white py-3 rounded-md border-2 border-main hover:bg-white hover:text-main hover:font-normal
                                   md:text-md'
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default ContactForm;

