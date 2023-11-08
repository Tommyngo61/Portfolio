import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function Contact()  {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
    emailjs.sendForm('service_n89gue4', 'template_d3o4edq', form.current, '593t4hn3DSaeUv-_3')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            alert('Email Sent')
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div>
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' name='your_name'/>
                    <input type="text" className="email" placeholder='Your Email' name='your_email'/>
                    <textarea name="message" id="" rows="5" className="msg" placeholder='Your Message'></textarea>
                    <button type='submit' value='send' className="submitBtn">Submit</button>
                    <div>
                        <LinkedInIcon className="links" fontSize="large" />
                        <GitHubIcon className="links" fontSize="large" />
                    </div>
                </form>
            </div>
        </section>
        </div>
  )
}

