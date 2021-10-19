import React from 'react';
import Services from '../Home/Services/Services';
import './MoreService.css';
import TypewriterComponent from 'typewriter-effect';


const MoreService = (props) => {


    return (
        <div>
            <div className="services-banner fw-bolder fs-1 text-light">
                <TypewriterComponent
                    options={{
                        strings: ['“THE BODY ACHIEVES WHAT THE MIND BELIEVES.”'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
            <div className="mt-5">
                <Services></Services>
            </div>
        </div>
    );
};

export default MoreService;