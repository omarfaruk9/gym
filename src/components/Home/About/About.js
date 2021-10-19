import React, { useState } from 'react';
import './About.css';
import aboutdata from '../../../fakedata/about.json';
import AboutDetails from '../AboutDetails/AboutDetails';
const About = () => {

    const [aboutUs, serAboutUs] = useState(aboutdata);

    return (
        <div className="container text-center about-us">
            <span className="my-3 fw-bolder">About us</span>
            <h1 className="my-3 fw-bolder mb-3">JOIN US OUR FREE WORKOUT <br /> TRAINING WITH DAZKO</h1>
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-3 g-4">
                {
                    aboutUs.map(about => <AboutDetails
                        key={about.id}
                        about={about}
                    ></AboutDetails>)
                }
            </div>
        </div>
    );
};

export default About;