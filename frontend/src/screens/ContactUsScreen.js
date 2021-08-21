import "./ContactUsScreen.css";
//import emailjs from "emailjs-com";//
import React from 'react'

// dependency emailjs-com is require



const ContactUsScreen = () => {


    
    return (
        <div>
            <div className="container">
                <form>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="38" rows="8" placeholder="Your Message" name="message" ></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send" />
                        </div>
                    </div>
                </form>
            </div>           
        </div>
    )
}

export default ContactUsScreen
