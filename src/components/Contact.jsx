import React from 'react'

function Contact() {
  return (
    <div>
      <form class="w3-center w3-padding-64 text-white w3-opacity w3-black text-2xl" name="contact" id="contact" netlify>Contact Me
    <p className='py-4'>
      <label>Name: <input type="text" name="name" /></label>
    </p>
    <p className='pb-4'>
      <label>Email: <input type="email" name="email" /></label>
    </p>
    <textarea name="message" id="message" cols="40" rows="5" placeholder="Write your comments or message here!"></textarea><br></br>
    <p>
      <button class="bg-black text-white rounded-lg p-2" type="submit">Send</button>
    </p>
    </form>
    </div>
  )
}

export default Contact
