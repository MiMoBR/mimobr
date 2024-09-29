import React from 'react';
import style from './style.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {

  return (
    <>
      <Navbar expand="lg" className={`bg-body-tertiary ${style.component_navbar}`}>
        <Container>
          {/* <Navbar.Brand target='_blank' href="mailto:reinaldo@mimobr.com">reinaldo@mimobr.com</Navbar.Brand> */}
          <Navbar.Brand target='_blank' href="mailto:reinaldo@mimobr.com" className={style.font_special_ux}
          >reinaldo@mimobr.com</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className={style.component_right_side}>
            <Nav className="me-auto">
              {/* <Nav.Link href="mailto:reinaldo@mimobr.com">reinaldo@mimobr.com</Nav.Link> */}
              <Nav.Link target='_blank' href="https://www.linkedin.com/in/reinaldonani/" className={style.font_special_ux}
              >LinkedIn</Nav.Link>
              <p className={style.font_special_ux}> / </p>
              <Nav.Link target='_blank' href="https://www.instagram.com/iamreinaldonani/" className={style.font_special_ux}
              >Instagram</Nav.Link>
              <p className={style.font_special_ux}> / </p>
              <Nav.Link target='_blank' href="https://twitter.com/iamreinaldonani" className={style.font_special_ux}
              >X Twitter</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
