import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import '../../css/Header.css';
import logo from '../../images/logo.png';

export default function NavbarComp() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="nav__container"
    >
      <Navbar.Brand href="#home" className="nav__brand">
        <img src={logo} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="nav__links">
        <Nav className="nav__links">
          <Nav.Link href="#features">Ground-Truth-Data</Nav.Link>
          <Nav.Link href="#pricing">How It Works</Nav.Link>
          <Nav.Link href="#features">Free Structure</Nav.Link>
          <Nav.Link href="#pricing">Example Deliverables</Nav.Link>
          <Nav.Link href="#features">Submission Portal</Nav.Link>
          <Nav.Link href="#pricing">Contact Us</Nav.Link>
          <Nav.Link href="#features" className="nav__btn">
            Sign Up
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
