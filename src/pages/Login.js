/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './css/Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        localStorage.clear();
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/login', {
                email,
                password,
            });

            const data = response.data;
            if (data.status === 'Success') {
                localStorage.setItem('token', data.token);
                navigate('/Home');
            } else {
                setError('Incorrect email or password.'); 
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <Container className="login-container">
            <div className="login-box">
                <h2 className="login-heading">Welcome Back!</h2>
                {error && <p className="error-message text-danger text-center">{error}!</p>}
                <Form onSubmit={handleLogin}>
                    <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="login-button">
                        Login
                    </Button>
                </Form>

                <div className="social-login">
                    <p>Or log in with:</p>
                    <Button variant="outline-primary" className="social-button">
                        <i className="fab fa-facebook"></i> Facebook
                    </Button>
                    <Button variant="outline-info" className="social-button">
                        <i className="fab fa-twitter"></i> Twitter
                    </Button>
                    <Button variant="outline-danger" className="social-button">
                        <i className="fab fa-google"></i> Google
                    </Button>
                </div>

                <div className="signup-link">
                    Don't have an account? <a href="#">Sign Up</a>
                </div>
            </div>
        </Container>
    );
};

export default Login;
