import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import "./styles.css"
function Signup(props) {
    const [ value, setValue ] = useState(20);

    const formInput =  props.theme ? 'bg-dark text-white border-black inputt' : 'bg-light text-black border-white'

    return (
        <main>
            <h2 className='subtitle'>Pet care starts here!</h2>
                        <Form className="signup-form">   
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="login-form-group">
                                        <Form.Label className="login-form-label">Name</Form.Label>
                                        <Form.Control className={formInput} type="text" placeholder="Your name" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="login-form-group">
                                        <Form.Label className="login-form-label">Last name</Form.Label>
                                        <Form.Control className={formInput} type="text" placeholder="Your last name" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6}>
                                    <Form.Group className="login-form-group">
                                        <Form.Label className="login-form-label">Email address</Form.Label>
                                        <Form.Control className={formInput} type="email" placeholder="Enter email" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                   <Form.Group className="login-form-group">
                                        <Form.Label className="login-form-label">Password</Form.Label>
                                        <Form.Control className={formInput} type="password" placeholder="Enter password" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6}>
                                    <Form.Group className="login-form-group">
                                        <Form.Label className="login-form-label">Select gender</Form.Label>
                                        <Form.Select className={formInput}>
                                            <option> Male</option>
                                            <option> Female</option>
                                            <option> Other</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="login-form-group">
                                        <Form.Label className="login-form-label">Your age: {value >= 80 ? "80+" : value}</Form.Label>
                                        <Form.Range
                                            className={`${formInput} bg-transparent`} 
                                            id='range'
                                            min={0} max={80}
                                            value={value}
                                            onChange={e => setValue(e.target.value)}
                                            >
                                            </Form.Range>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button className="button-submit"variant="success" type="submit">
                                    Submit
                            </Button>
                        </Form>
                        <div className='account'>
                            <p>Already have an account?</p>
                            <Button 
                                variant='link' 
                                type="submit" 
                                onClick={props.handleToggleLogged}
                                >
                                    Log in
                            </Button>
                        </div>
        </main>
    )
}

export default Signup