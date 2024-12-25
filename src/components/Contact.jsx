import React from 'react'
import '../styles/Contact.scss'
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Github_logo from '../assets/icons8-github-50.png'
import LinkedIn_logo from '../assets/icons8-linkedin-50.png'
import Instagram_logo from '../assets/icons8-instagram-50.png'
import Whatsapp_logo from '../assets/icons8-whatsapp-50.png'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );
    
    // Clears the form after sending the email
    e.target.reset();
  };
  return (
    <div className='Contact-sec'>
      <div className='contact_card'>
        <form onSubmit={sendEmail} className='form'>
          <div className='input_field'>
            <label>Name</label>
            <input type="text" name="user_name" placeholder='xyz'/>
          </div>
          <div className='input_field'>
            <label>Email</label>
            <input type="email" name="user_email" placeholder='xyz@mail.com'/>
          </div>
          <div className='input_field'>
            <label>Message</label>
            <textarea rows="5" name="message" placeholder='xyz message'/>
          </div>
          <input type="submit" value="Send" disabled={isSubmitting} className='sub_btn' />
          {stateMessage && <p>{stateMessage}</p>}
        </form>
        <div className="logo_con">
          <a href='https://github.com/SnappyKODE'><img src={Github_logo}/></a>
          <a href='https://www.linkedin.com/in/kartikey-khanna-046ab72a3/'><img src={LinkedIn_logo}/></a>
          <a><img src={Instagram_logo}/></a>
          <a href='https://wa.me/6393637115'><img src={Whatsapp_logo}/></a>
        </div>
      </div>
      
    </div>
   
  );
};
export default Contact;
