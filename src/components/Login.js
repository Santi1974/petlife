import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import {FaEye, FaEyeSlash} from "react-icons/fa"

import "./styles.css"

function Login(props) {
    
    const[showPassword,setShowPassword] = useState(false);

    const formInput =  props.theme ? 'bg-dark text-white border-black inputt' : 'bg-light text-black border-white'

  return (
    <main>
            <h2 className='subtitle'>Good to see you again!</h2>
                    <Form className='login-form'>
                        <Form.Group className='login-form-group'>
                            <Form.Label className='login-form-label'>Email address</Form.Label>
                            <Form.Control className={formInput} id='aa' type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className='login-form-group'>
                            <Form.Label className='login-form-label'>Password</Form.Label>
                            <InputGroup>
                                <Form.Control  
                                    className={formInput}
                                    type={showPassword ? "text" : "password"} 
                                    placeholder="Enter password" />
                                <Button 
                                    variant='success'
                                    onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </Button>
                            </InputGroup>
                        </Form.Group>
                        <Button variant="success" type="submit" className='button-submit'>
                            Submit
                        </Button>
                    </Form>
                    <div className='account'>
                        <p>Dont have an account yet?</p>
                        <Button 
                            variant='link' 
                            type="submit" 
                            onClick={props.handleToggleLogged}
                            >
                                Sign up
                        </Button>
                    </div>
    </main>
    );
}

export default Login