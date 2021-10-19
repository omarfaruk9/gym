import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <>
            <div className="notfound">
                <div>
                    <Link to="/home" className="mt-5">
                        <div className="btn btn-dark text-light mt-5 btn-outline-dark">Back to Home <i className="fas mx-3 fa-arrow-left"></i></div>
                    </Link>
                </div>
            </div>

        </>
    );
};

export default NotFound;