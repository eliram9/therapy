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
        <div className='bg-banana p-10 w-1/2 poppins'>

        
        <form onSubmit={sendEmail} className='w-full'>
            <div className='w-full flex justify-center items-start'>
                <div className='w-full'>
                    <label htmlFor="first_name" className="block mb-1 text-sm font-medium text-darkGray">First Name</label>
                    <input type="text" 
                        name="first_name" 
                        value={formInputs.first_name} 
                        onChange={handleChange} 
                        required 
                        className='border rounded-md w-full px-2 py-1'
                    />
                </div>
                <div className='w-full'>
                    <label htmlFor="last_name" className="block mb-1 text-sm font-medium text-darkGray">Last Name</label>
                    <input type="text" 
                        name="last_name" 
                        value={formInputs.from_name} 
                        onChange={handleChange} 
                        required 
                        className='border rounded-md w-full px-2 py-1'
                    />
                </div>
            </div>
                
            <div className='w-full flex justify-center items-start'>
                <div className='w-full'>
                    <label htmlFor="email" className="block mb-1 text-sm font-medium text-darkGray">Email Address</label>
                    <input type="email" 
                        name="email" 
                        value={formInputs.email} 
                        onChange={handleChange} 
                        required 
                        className='border rounded-md w-full px-2 py-1'
                    />
                </div>
                <div className='w-full'>
                    <label htmlFor="email" className="block mb-1 text-sm font-medium text-darkGray">Phone Number</label>
                    <input type="text" 
                           name="phone" 
                           value={formInputs.phone} 
                           onChange={handleChange} 
                           required 
                           className='border rounded-md w-full px-2 py-1'
                    />
                </div>
            </div>
            
            <div>
                <label htmlFor="message" className="block mb-1 text-sm font-medium text-darkGray">Message</label>
                <textarea name="message" 
                        value={formInputs.message} 
                        onChange={handleChange} 
                        required
                        rows={3}
                        className='border rounded-md w-full px-2 py-1'>
                </textarea>
            </div>
            
            <button type="submit">Send</button>
        </form>
        </div>
    );
};

export default ContactForm;

