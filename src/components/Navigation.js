import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'

import logo1 from "../assets/blacklogo.webp"
import logo2 from "../assets/whitelogo.webp"
import dark from "../assets/dark.webp"
import light from "../assets/light2.webp"

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