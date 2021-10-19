import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css'
import img from '../../../images/log.png';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { logInWithGoogle, handaleSignUp } = useAuth();
    // console.log(logInWithGoogle);
    return (
        <div>
            <div className="login-banner">

            </div>

            <div className="login-form mt-5">

                <div className="container">

                    <div className="row row-cols-lg-2">

                        <div className="mt-5">
                            <h1 className="fw-bolder mb-3">Log In <span className="text-success">Please</span></h1>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button
                                onClick={handaleSignUp}
                                variant="primary" type="submit">
                                Log In
                            </Button><br />
                            <hr />
                            <div className="text-center">
                                <Link className="new-user" to="/register">
                                    <span>Go for Register</span>
                                </Link>
                                <span className="d-block fw-bolder text-muted">----------------------------------or----------------------------------</span>
                                <Button
                                    onClick={logInWithGoogle}
                                    variant="primary mt-3" type="submit">
                                    Log In With Google
                                </Button>
                                <br />
                                <Button variant="primary mt-3" type="submit">
                                    Log In With Facebook
                                </Button>
                            </div>
                        </div>

                        <div className=" login-img">
                            <img src={img} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;