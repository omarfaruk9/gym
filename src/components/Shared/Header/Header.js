import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.jpg'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut, handaleSignUp } = useAuth();
    // console.log(user)
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} className="logo" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center">
                        <Link className="ms-3 text-decoration-none fw-bolder" to="/home">Home</Link>
                        <Link className="ms-3 text-decoration-none fw-bolder" to="/service">Service</Link>
                        <Link className="ms-3 text-decoration-none fw-bolder" to="/gallery">Gallery</Link>
                        <Link className="ms-3 text-decoration-none fw-bolder" to="/blog">Blog</Link>
                        {user.email && <span className="text-light ms-2"> {user.displayName}</span>}
                        {
                            user?.email && <img className="user-img mx-2" src={user?.photoURL} alt="" />
                        }
                        {
                            user?.displayName ?
                                <button
                                    onClick={logOut}
                                    className="btn btn-danger ms-3">Log Out</button> :
                                <div>
                                    <Link to="/login">
                                        <button
                                            onClick={handaleSignUp}
                                            className="btn ms-3 btn-success btn-outline-dark">Login</button>
                                    </Link>

                                    <Link className="ms-3 text-decoration-none fw-bolder" to="/register">Register</Link>
                                </div>

                        }



                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;