import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
import Typewriter from 'typewriter-effect';


const Service = (props) => {
    const { img, service_name, service_charge, service_info, _id } = props.service;
    // console.log(_id);
    return (
        <div>
            <div className="service-card h-100">
                <div className="inner">
                    <img src={img} className="img-fluid card-img" alt="" />
                </div>
                <div className="main-text px-2 mt-3">
                    <div className="fw-bolder fs-1">
                        <Typewriter
                            options={{
                                strings: [`${service_name}`],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <h3 className="d-flex"><span className="fs-1 fw-bolder text-danger">{service_charge} </span> $</h3>
                    <p>
                        {service_info}
                    </p>
                    <Link to={`/serviceDetails/${_id}`}>
                        <div className="btn btn-danger mb-3">Details</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;