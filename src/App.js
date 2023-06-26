import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

import Navigation from './components/Navigation';
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header';
import Cursor from './components/Cursor';

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

import pets from "../src/assets/pets2.webp"
import weblogo from "../src/assets/weblogo.png"

import './App.css';

function App() {

  /*Log in or Sign up */
  const [isLogged, setIsLogged] = useState(true);

  const handleToggleLogged =() =>{
    setIsLogged(!isLogged);
  }

  /*Dark or Light theme*/
  const [isDark, setIsDark] = useState(false);

  const handleToggleTheme =() =>{
    setIsDark(!isDark);
    document.body.classList.toggle('theme-dark');
  }

  return (
    <div className={`App ${isDark ? 'dark' : 'light'}`}>

        <Helmet>
          <title>PetLife</title>
          <link rel="icon" href={weblogo}/>
        </Helmet>

          <Navigation 
            handleToggleTheme={handleToggleTheme} 
            theme={isDark}
            />
          <Cursor />
        <div className='container'>
          <Row>
            <Col md={6} className='main-form'>
                <Header />
                {isLogged ? <Login handleToggleLogged={handleToggleLogged} theme={isDark}/> 
                  : <Signup handleToggleLogged={handleToggleLogged} theme={isDark}/>}
            </Col>

            <Col md={6} className='petimg'>
              <Image src={pets} fluid />
            </Col>
          </Row>
        </div>
        <br/>
    </div>
  );
}

export default App;
