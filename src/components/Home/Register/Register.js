import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Register.css'
import img from '../../../images/f2.png'
import useFirebase from '../../../hooks/useFirebase';

const Register = () => {
    const { userName, userEmail, userPassword, handaleSignUp } = useFirebase();
    return (
        <div className="container">
            <h1>Register</h1>
            <div className="row row-cols-lg-2">
                <div className="ragister-img">
                    <img src={img} className="img-fluid" alt="" />
                </div>
                <div className="ragister-form">
                    <div>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                onChange={userName}
                                type="text" placeholder="Your name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                onChange={userEmail}
                                type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                onChange={userPassword}
                                type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button
                            onClick={handaleSignUp}
                            variant="primary" type="submit">
                            Register
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;