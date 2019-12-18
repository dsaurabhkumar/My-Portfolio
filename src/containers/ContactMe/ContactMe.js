import React from 'react';
import './ContactMe.css';
import heroBanner from '../../assets/profile-photo/banner.jpg';
import { Link } from 'react-router-dom';

class ContactMe extends React.Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="heroBanner img-responsive mt-5 text-center">
                    <img className="contactImage" src={heroBanner} alt=""></img>
                </div>
                <div className="contactMe text-center mt-5">
                    <h1>Contact "Saurabh Kumar"</h1>
                    <p>Get in touch with me</p>
                </div>
                <div className="socialIcons mt-4 row">
                    <div className="col-md-3 text-center mt-2">
                    <a className="linkText" href="mailto:dsaurabh.kumar1288@gmail.com" target="_blank"><i className="fas fa-envelope-open-text circle-icon"></i>
                        <p>dsaurabh.kumar1288@gmail.com</p></a>
                    </div>
                    <div className="col-md-3 text-center mt-2">
                        <a className="linkText" href="tel:8278276208"><i className="fas fa-mobile-alt circle-icon"></i>
                        <p>Connect me @ 8278276208</p></a>
                    </div>
                    <div className="col-md-3 text-center mt-2">
                        <a className="linkText" href="https://www.linkedin.com/in/saurabh-kumar-193160176" target="_blank"><i className="fab fa-linkedin-in circle-icon"></i>
                        <p>Be in touch on linkedin</p></a>
                    </div>
                    <div className="col-md-3 text-center mt-2">
                        <a className="linkText" href="https://www.facebook.com/saurabh.k.dhiman" target="_blank"><i className="fab fa-facebook-f circle-icon"></i>
                        <p>Follow me on facebook</p></a>
                    </div>
                    <div className="col-md-3 text-center mt-2">
                        <a className="linkText" href="https://www.instagram.com/dhiman.sunny12" target="_blank"><i className="fab fa-instagram circle-icon"></i>
                        <p>Follow me on instagram</p></a>
                    </div>
                    <div className="col-md-3 text-center mt-2">
                        <a className="linkText" href="https://twitter.com/dhiman_sunny12" target="_blank"><i className="fab fa-twitter circle-icon"></i>
                        <p>Follow me on twitter</p></a>
                    </div>
                    <div className="col-md-3 text-center mt-2">
                        <a className="linkText" href="https://wa.me/8278276208"><i className="fab fa-whatsapp circle-icon"></i>
                        <p>Connect with me on whatsapp</p></a>
                    </div>
                    <div className="col-md-3 text-center mt-2">
                        <a className="linkText" href="skype:dsaurabh.kumar1288?chat" target="_blank"><i className="fab fa-skype circle-icon"></i>
                        <p>Connect with me on skype</p></a>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactMe