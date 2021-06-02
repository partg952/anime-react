import React from 'react'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav} from 'react-bootstrap'
export default function Navbar2() {
  return (
    <div>
      <Navbar bg="warning" expand="lg" style={{padding:'20px'}}>
        <Navbar.Brand>Anime Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='mr-auto'>
              <p style={{color:'black'}}>hello</p>
            </Nav>
          </Navbar.Collapse>
        </Navbar.Toggle>
      </Navbar>
    </div>
  )
}
