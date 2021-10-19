import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.jpg'
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Header = () => {
    const { user, logOut, handleRegister } = useFirebase();
    // console.log(user)
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} className="logo" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className="ms-3" to="/home">Home</Link>
                        <Link className="ms-3" to="/service">Service</Link>
                        <Link className="ms-3" to="/gallery">Gallery</Link>
                        <Link className="ms-3" to="/blog">Blog</Link>
                        {user.email && <p className="text-light ms-2"> {user.displayName}</p>}
                        {
                            user?.email && <img className="user-img mx-2" src={user?.photoURL} alt="" />
                        }
                        {
                            user?.displayName ?
                                <button
                                    onClick={logOut}
                                    className="btn btn-danger ms-3">Log Out</button> :
                                <Link to="/login">
                                    <button
                                        className="btn ms-3 btn-success btn-outline-dark">Login</button>
                                </Link>
                        }
                        <Link className="ms-3" to="/register">Register</Link>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;