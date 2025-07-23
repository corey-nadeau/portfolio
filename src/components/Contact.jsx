import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send(
      'service_c4gi7xc',
      'template_00b0pw9',
      templateParams,
      'Fti9vKpjynsHFUte3'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Your message has been sent! Corey usually replies within 1 day. ');
      setName('');
      setEmail('');
      setMessage('');
    }, (err) => {
      console.log('FAILED...', err);
      alert('Oops! Something went wrong.');
    });
  }
    
  return (
    // styled with tailwindcss


    <div className='md:py-64 pt-20 bg-black md:bg-transparent' id='contact'>
    <div className=" mx-auto md:mb-20 bg-white border-2 md:border-black lg:shadow-black lg:shadow-2xl bg-opacity-70 text-black text-center p-20 md:rounded-3xl">
      <h2 className="text-2xl font-bold mb-4 ">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold mb-2">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500 text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-bold mb-2">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500 text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block font-bold mb-2">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500 text-black"
            required
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Send</button>
      </form>
    </div>
    </div>
  )
}

export default Contact
