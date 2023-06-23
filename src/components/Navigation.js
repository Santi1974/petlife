import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'

import logo1 from "../assets/blacklogo.png"
import logo2 from "../assets/whitelogo.png"
import dark from "../assets/dark.png"
import light from "../assets/light2.png"

import "./styles.css"
import "../App.css"

function Navigation(props) {
  return (
    <Navbar>
          <Navbar.Brand className='text-start'>
              <Image className="logo" src={props.theme ? logo2 : logo1} />
          </Navbar.Brand>
          <Navbar.Text  className='text-end'>
              <Image className="sun" src={props.theme ? dark : light}  onClick={props.handleToggleTheme}/>
          </Navbar.Text>
    </Navbar>
  )
}

export default Navigation