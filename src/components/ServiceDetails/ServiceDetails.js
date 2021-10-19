import React from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css';
import servicesDetails from '../../fakedata/service.json';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const details = servicesDetails.find(item => item._id == serviceId);
    const { img, service_name, service_info, service_charge } = details;
    console.log(details);


    return (
        <div className="container">
            <h1 className="text-center mt-5">Service Details</h1>
            <p className="text-center mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <br /> there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <div className="service-details row">
                <div className="details-img col-lg-6 col-md-12 col-sm-12 ms-auto">
                    <img src={img} className=" img-fluid img-thumbnail" alt="" />
                </div>
                <div className="details-text col-lg-6 col-md-12 col-sm-12 mt-3">
                    <h2 className="text-success">{service_name}</h2>
                    <h5>Service Charge: {service_charge} $</h5>
                    <p>{service_info}</p>
                </div>
            </div>
            <Link to="/">
                <div className="btn mt-5 btn-outline-dark">Go Back
                    <i class="fas mx-2 fa-arrow-left text-muted"></i>
                </div>
            </Link>
        </div>
    );
};

export default ServiceDetails;