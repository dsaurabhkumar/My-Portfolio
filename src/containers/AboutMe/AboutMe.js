import React from 'react';
import './AboutMe.css';
import image from '../../assets/background-image/frontEnd.jpg';

class AboutMe extends React.Component {
    render() {
        return (
            <div className="container aboutMeContainer">
                    <div className="mt-5 text-center">
                        <h2>Hi, I'm Saurabh Kumar a Front-End, Web Developer and UI Designer based in New Delhi, India.</h2>
                        <p>Web developer with 1.7 years of front end experience</p>
                    </div>
                    <div className="mt-2 text-center aboutMe">
                        <img src={image} alt=""></img>
                    </div>
                    <div className="mt-5 text-center contentContainer">
                        <h2>What can I do ?</h2>
                        <p>I have a passion for web design and love to create for web and mobile devices that improves the lives around me.</p>
                        <p>I love building UI design experiences that improve user's everyday life and I also convert the design into responsive HTML5/CSS3/Sass that means PSD to HTML Development.</p>
                        <p>I like to keep it simple. My goals are to focus on that what all is required.</p>
                    </div>
                    <div className="mt-5 text-center contentContainer">
                        <h2>Develop what you need.</h2>
                        <p>I'm a developer, so I know how to create your website to run across devices using the latest technologies available.</p>
                    </div>
            </div>
        )
    }
}
export default AboutMe