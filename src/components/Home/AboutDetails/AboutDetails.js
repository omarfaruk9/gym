import React from 'react';
import './AboutDetails.css'

const AboutDetails = (props) => {
    // console.log(props);
    const { img, name, info } = props.about;
    return (
        <div className="">
            <div className="about-card p-5">
                <img src={img} className="about-icons mb-3" alt="" />
                <h2>{name}</h2>
                <p>{info}</p>
            </div>
        </div>
    );
};

export default AboutDetails;