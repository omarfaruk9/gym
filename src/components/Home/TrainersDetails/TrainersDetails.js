import React from 'react';
import './TrainersDetails.css';
import Typewriter from 'typewriter-effect';

const TrainersDetails = (props) => {
    const { img, _name, trainer } = props.trainer;
    return (
        <div className="trainer-blogs">
            <div className="trainers">
                <div className="trainer-img">
                    <img src={img} className="rounded-3" alt="" />
                </div>
                <div className="trainer-text fw-bolder">
                    <Typewriter
                        options={{
                            strings: [`${_name}`],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    <small className="fw-bolder text-muted">{trainer}</small>
                </div>
            </div>
        </div>
    );
};

export default TrainersDetails;