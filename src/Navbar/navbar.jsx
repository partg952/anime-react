import React from 'react'
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav,Image} from 'react-bootstrap'

export default function Navbar2() {
  

  return (
    <div>
      <Navbar bg="warning" expand="lg" style={{padding:'20px'}}>
        <Navbar.Brand href="/">
          <Image src="favicon.ico" roundedCircle height="100px"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='mr-auto'>
              <Nav.Link href="#"></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar.Toggle>
      </Navbar>
    
    </div>
  )
}
