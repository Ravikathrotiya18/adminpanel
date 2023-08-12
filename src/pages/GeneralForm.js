import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';
import * as yup from 'yup';
import './css/GeneralForm.css';
import Header from './Header';
import Box from '@mui/material/Box';

function GeneralForm() {
    const schema = yup.object().shape({
        username: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().required('Password is required'),
        file: yup.mixed().required('File is required'),
    });

    return (
        <Box sx={{ display: 'flex' }}>
                <Header/>
            <Box component="main" className='mt-5 pt-5' sx={{ flexGrow: 1, p: 3 }}  >
                <div>
                    <div className="form-container">
                        <div className=' widthfull color bordr bottom' >
                            <div className="h3">General Form</div>
                        </div>
                        <Formik
                            validationSchema={schema}
                            onSubmit={console.log}
                            initialValues={{
                                username: '',
                                password: '',
                                file: '',
                            }}
                        >
                            {({ handleSubmit, handleChange, setFieldValue, values, touched, errors }) => (
                                <Form className='new' noValidate onSubmit={handleSubmit}>
                                    <Form.Group controlId="validationFormikUsername">
                                        <Form.Label className="form-label">Email</Form.Label>
                                        <InputGroup hasValidation>
                                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                            <Form.Control
                                                type="email"
                                                placeholder="Email"
                                                aria-describedby="inputGroupPrepend"
                                                name="username"
                                                value={values.username}
                                                onChange={handleChange}
                                                isInvalid={touched.username && !!errors.username}
                                            />
                                            <Form.Control.Feedback type="invalid" className="invalid-feedback">
                                                {errors.username}
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group controlId="validationFormikPassword">
                                        <Form.Label className="form-label">Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            isInvalid={touched.password && !!errors.password}
                                        />
                                        <Form.Control.Feedback type="invalid" className="invalid-feedback">
                                            {errors.password}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="validationFormikFile">
                                        <Form.Label className="form-label">Choose File</Form.Label>
                                        <Form.Control
                                            type="file"
                                            name="file"
                                            onChange={(event) => setFieldValue("file", event.currentTarget.files[0])}
                                            isInvalid={touched.file && !!errors.file}
                                        />
                                        <Form.Control.Feedback type="invalid" className="invalid-feedback">
                                            {errors.file}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Button type="submit" className="submit-button">Submit form</Button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </Box>
        </Box>
    );
}

export default GeneralForm;
