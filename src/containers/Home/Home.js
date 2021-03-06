import React from 'react';
import './Home.css';
import heroBanner from '../../assets/profile-photo/banner.jpg';
import ScrollToTop from '../../components/Scroll-to-Top/ScrollToTop';

function Home() {
    return (
        <main className="container">
            <div className="backgroundImage">
                <div className="heroBanner img-responsive mt-5 text-center">
                    <img src={heroBanner} alt=""></img>
                </div>
                <div className="mt-5 text-center name">
                    <strong>Saurabh Kumar Dhiman</strong>
                </div>
                <div className="mt-4 text-center name">
                    <strong>Web/Front-End Developer</strong>
                </div>
                <div className="mt-4 mb-5 text-center name">
                    <strong>HTML5 | SASS | Bootstrap | Angular | React | Java Script | jQuery | AEM | GIT</strong>
                </div>
                <ScrollToTop />
            </div>
        </main>
    )
}
export default Home