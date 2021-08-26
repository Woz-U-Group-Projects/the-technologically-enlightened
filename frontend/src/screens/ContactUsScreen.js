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
    <body>
      <h2 className="title">Contact Us</h2>
      <div className="email-us-body">
      <div className="container">
        <div className="title_email">Email Us</div>
        <form action="#" className="contact-form" onSubmit={sendEmail}>
          <div className="input-box">
            <label>Name</label>
            <input type="text" placeholder="Name" name="name" required />
          </div>
          <div className="input-box">
            <label>Email</label>
            <input type="email" placeholder="Email" name="email" required />
          </div>
          <div className="input-box">
            <label>Subject</label>
            <input type="text" placeholder="Subject" name="subject" />
          </div>
          <div className="input-box">
            <label>Message</label>
            <textarea cols="38" rows="8" placeholder="Message" name="message" required />
          </div>
          <button className="button">
            <input type="submit" value="Send" />
          </button>
        </form>
      </div>
      </div>
    </body>
  );
}