import React from 'react';
import './Footer.css';
import logo from '../../../images/logo.jpg';
const Footer = () => {
    return (
        <div className="bg-info footer">
            <footer>
                <div className="container">
                    <div className="row mx-0">

                        <div className="col-sm-12 col-md-12 col-lg-2 d-flex  text-center item">
                            <div>
                                <img src={logo} className="logo me-auto" alt="" />
                            </div>
                            <div className="text-center">
                                <h5 className="text-success fw-bolder ms-auto">FITNESS BD</h5>
                                <small className="fw-bolder text-muted">Good health <br /> fresh mind</small>
                            </div>
                        </div>


                        <div className="col-sm-6 col-lg-4 text-center item">
                            <h6>Level-4, 34, Awal Centre, Banani, Dhaka</h6>
                            <h6>Official: Fitnessbd348@.com</h6>
                            <h6> Helpline : +13220867 (Available : 09:00am to 7:00pm)</h6>
                        </div>
                        <div className="col-md-6 col-lg-5 item text">
                            <h3>Company Name</h3>
                            <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                        </div>

                    </div>
                    <hr />
                    <p className="copyright text-center">Company Name © 2021</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;