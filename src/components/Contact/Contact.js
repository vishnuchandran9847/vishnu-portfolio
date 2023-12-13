import React, { useRef }  from "react";
import "./Contact.css";
import walmart from "../../Assets/Walmart-Logo.png";
import adobe from "../../Assets/adobe.png";
import facebook from "../../Assets/facebook.png";
import microsoft from "../../Assets/microsoft.png";

// import facebookicon from "../../Assets/facebook-icon-png.png";
// import instagramicon from "../../Assets/instagram-icon.png";
// import linkdinicon from "../../Assets/linkdin-icon.png";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";


import emailjs from '@emailjs/browser';




const Contact=()=>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_zq0wm4g', 'template_ind5zyd', form.current, '_B6pY3-EqcBOvqlun')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent !');
          }, (error) => {
              console.log(error.text);
          });
      };

    return(
        <section id="ContactPage">
            <div id="Clients">
                <h1 className="ContactPageTitle">My Clients</h1>
                <p className="ClientDesc">
                    I have had the opertunity to work with a diverse group of companies.Some of the notable companies i have worked with includes
                </p>
                <div className="ClientImgs">
                    <img src={adobe} alt="Clients" className="ClientImg"/>
                    <img src={adobe} alt="Clients" className="ClientImg"/>
                    <img src={adobe} alt="Clients" className="ClientImg"/>
                    <img src={adobe} alt="Clients" className="ClientImg"/>
                </div>
            </div>
            <div id="Contact">
                <h1 className="ContactPageTitle">Contact Me</h1>
                <span className="ContactPageDes">
                    Please fill out the form below to discuss any work opertunities.
                </span>
                <form className="ContactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Enter Name" name="your_name" />
                    <input type="email" className="email" placeholder="Enter Email" name="your_email" />
                    <textarea className="msg" name="message" rows="5" placeholder="Enter Message"></textarea>
                    <button type="send" value="submit" className="SubmitBtn">Submit</button>

                    <div className="Links">

                    <Link className="link">
                    <FaFacebook />
                    </Link>
                    <Link className="link">
                    <FaInstagram />
                    </Link>
                    <Link className="link">
                    <FaLinkedin />
                    </Link>
                    </div>
                </form>
            </div>

        </section>

    )
}
export default Contact;