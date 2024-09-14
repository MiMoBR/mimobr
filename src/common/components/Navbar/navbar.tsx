import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link'

export default function NavBar() {

    return (
        <>
            <div>
            <nav style={{padding:"10px 0 10px 0"}}>
            <Button variant="primary">Click me</Button>
                <Link href='/'  style={{padding:"10px 10px 10px 0"}} >Home</Link>
                <Link href='/events-list'  style={{padding:"10px 10px 10px 0"}} >Events Tests</Link>
                <Link href='/blog'  style={{padding:"10px 10px 10px 0"}} >Blog</Link>
            </nav>
            </div>

            <div>
            <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            </div>
        </>
    )
}
