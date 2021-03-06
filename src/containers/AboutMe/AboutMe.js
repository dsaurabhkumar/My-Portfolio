import React from 'react';
import './AboutMe.css';
import ScrollToTop from '../../components/Scroll-to-Top/ScrollToTop';

class AboutMe extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container aboutMeContainer">
                    <div className="mt-5 text-center">
                        <h2>Hi, I'm a Front-End, Web Developer and UI Designer based in New Delhi, India.</h2>
                        <p>"With 1.7 years of front end experience."</p>
                    </div>
                    <div className="mt-2 aboutMe">
                        <div>
                            <i className="fab fa-html5 html5"></i>
                        </div>
                        <div>
                            <i className="fab fa-css3-alt css3"></i>
                        </div>
                        <div>
                            <i className="fab fa-js-square js"></i>
                        </div>
                        <div>
                            <i className="fab fa-bootstrap bootsTrap"></i>
                        </div>
                        <div>
                            <i className="fab fa-git-alt git"></i>
                        </div>
                        <div>
                            <i className="fab fa-angular angular"></i>
                        </div>
                        <div>
                            <i className="fab fa-react react"></i>
                        </div>
                    </div>
                    <div className="mt-5 text-center contentContainer">
                        <h2>What can I do ?</h2>
                        <p>I have a passion for web design and love to create for web and mobile devices that improves the lives around me.</p>
                        <p>I love building UI design experiences that improve user's everyday life and I also convert the design into responsive HTML5/CSS3/SASS that means PSD to HTML Development.</p>
                    </div>
                    <div className="mt-5 text-center contentContainer">
                        <h2>Develop what you need.</h2>
                        <p>I'm a developer, so I know how to create website to run across devices using the latest technologies available.</p>
                    </div>
                    <ScrollToTop></ScrollToTop>
                </div>
            </React.Fragment>
        )
    }
}
export default AboutMe