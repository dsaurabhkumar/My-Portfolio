import React from 'react';
import './ContactMe.css';
import heroBanner from '../../assets/profile-photo/banner.jpg';

class ContactMe extends React.Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="heroBanner img-responsive mt-5 text-center">
                    <img className="contactImage" src={heroBanner} alt=""></img>
                </div>
                <div className="contactMe text-center mt-5">
                    <p>Web developer with 1.7 years of front end experience. Worked on websites, mobile applications, static and dynamic pages.
                    Standardized the view with a new, responsive, mobile-first approach and strategy.</p>
                    <h3><strong>Get in touch with me</strong></h3>
                </div>
                <ul className="socialIcons mt-5">
                    <li className="text-center mt-2">
                        <a className="linkText" href="mailto:dsaurabh.kumar1288@gmail.com" target="_blank"><i className="fas fa-envelope-open-text"></i>
                        </a>
                    </li>
                    <li className="text-center mt-2">
                        <a className="linkText" href="tel:8278276208"><i className="fas fa-mobile-alt"></i>
                        </a>
                    </li>
                    <li className="text-center mt-2">
                        <a className="linkText" href="https://www.linkedin.com/in/saurabh-kumar-193160176" target="_blank"><i className="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li className="text-center mt-2">
                        <a className="linkText" href="https://www.facebook.com/saurabh.k.dhiman" target="_blank"><i className="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li className="text-center mt-2">
                        <a className="linkText" href="https://www.instagram.com/dhiman.sunny12" target="_blank"><i className="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li className="text-center mt-2">
                        <a className="linkText" href="skype:dsaurabh.kumar1288?chat" target="_blank"><i className="fab fa-skype"></i>
                        </a>
                    </li>
                </ul>
                <ul className="contactDetails mt-5 mb-5">
                    <li>E-mail: dsaurabh.kumar1288@gmail.com</li>
                    <li>Contact: +91-8278276208</li>
                </ul>
            </div>
        )
    }
}
export default ContactMe