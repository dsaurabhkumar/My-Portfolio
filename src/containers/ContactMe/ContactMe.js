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
                    <a href="mailto: dsaurabh.kumar1288@gmail.com" target="_blank"><i className="fas fa-envelope-open-text circle-icon"></i>
                        <p>dsaurabh.kumar1288@gmail.com</p></a>
                    </div>
                    <div className="col-md-3 text-center mt-2">
                        <i className="fas fa-mobile-alt circle-icon"></i>
                        <p>Connect me @ 8278276208</p>
                    </div>
                    <div className="col-md-3 text-center mt-2">
                        <i className="fab fa-twitter circle-icon"></i>
                        <p>Follow me on twitter</p>
                    </div>
                    <div className="col-md-3 text-center mt-2">
                        <i className="fab fa-facebook-f circle-icon"></i>
                        <p>Follow me on facebook</p>
                    </div>
                    <div className="col-md-3 text-center mt-2">
                        <i className="fab fa-linkedin-in circle-icon"></i>
                        <p>Be in touch on linkedin</p>
                    </div>
                    <div className="col-md-3 text-center mt-2">
                        <i className="fab fa-instagram circle-icon"></i>
                        <p>Follow me on instagram</p>
                    </div>
                    <div className="col-md-3 text-center mt-2">
                        <i className="fab fa-whatsapp circle-icon"></i>
                        <p>Connect with me on whatsapp</p>
                    </div>
                    <div className="col-md-3 text-center mt-2">
                        <i className="fab fa-skype circle-icon"></i>
                        <p>Connect with me on skype</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactMe