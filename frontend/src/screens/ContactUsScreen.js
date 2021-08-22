import "./ContactUsScreen.css";
import emailjs from "emailjs-com";
import React from 'react';

// dependency emailjs-com is require



export default function ContactUsScreen() {

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_c4an2um', 'template_pq05pfl', e.target, 'user_5V5g6HCkkWAjG6ZFXyrDw')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
  
    return (
      <form className="contact-form" onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" placeholder="Name" name="name" />
        <label>Email</label>
        <input type="email" placeholder="Email" name="email" />
        <label>Subject</label>
        <input type="text" placeholder="Subject" name="subject" />
        <label>Message</label>
        <textarea cols="38" rows="8" placeholder="Message" name="message" />
        <input type="submit" value="Send" />
      </form>
    );
  }