import React, { useState } from 'react';
import './Services.css'

import fakedata from '../../../fakedata/service.json';

import Service from '../../Service/Service';
const Services = () => {
    const [services, setServices] = useState(fakedata);
    // console.log(services);
    return (
        <div className="container services">
            <h1 className="text-center mb-5 text-success fw-bolder">Our Fitness Services</h1>
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;