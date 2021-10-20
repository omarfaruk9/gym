import React from 'react';
import './Footer.css';
import logo from '../../../images/logo.jpg';
import payment from '../../../images/ssl-commerce.1d268dce (1).png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container pt-5">
                <div className="row mx-0">

                    <div className="col-sm-12 col-md-12 col-lg-2 mt-4 justify-content-center d-flex  ">
                        <div>
                            <img src={logo} className="logo me-auto" alt="" />
                        </div>
                        <div className="mx-2">
                            <h5 className="text-success fw-bolder ms-auto">FITNESS BD</h5>
                            <small className="fw-bolder text-muted">Good health <br /> fresh mind</small>
                        </div>
                    </div>


                    <div className="col-sm-6 col-lg-5 text-s mt-4 text-light">
                        <h6><i className="fas fs-5 fa-map-marker-alt"></i> Level-4, 34, Awal Centre, Banani, Dhaka</h6>
                        <h6><i className="far fs-5 fa-envelope"></i> Official: Fitnessbd348@.com</h6>
                        <h6><i class="fas fs-5 fa-phone-alt"></i> Helpline : +13220867 (Available : 09:00am to 7:00pm)</h6>
                    </div>
                    <div className="col-md-6 col-lg-4 item mt-3  ms-auto">
                        <img src={payment} alt="" className="" />
                    </div>
                </div>
                <div className="icons text-center mt-3">
                    <i className="fab px-3 fs-3 m-3 fa-facebook-f"></i>
                    <i className="fab fs-3 m-3 fa-twitter"></i>
                    <i className="fab fs-3 m-3 fa-whatsapp"></i>
                    <i className="fab fs-3 m-3 fa-instagram"></i>
                </div>
                <hr className="text-light" />
                <p className="copyright text-center text-muted">Copyright © 2021 Fitness-Bd.com</p>
            </div>
        </div>
    );
};

export default Footer;