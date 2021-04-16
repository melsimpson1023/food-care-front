import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './Header.scss'

const authenticatedOptions = (
  <Fragment className="navbarStyle">
    <NavDropdown title="Food" className="collapsible-nav-dropdown Home">
      <NavDropdown.Item href="#fooddonate" className="color">Donate money</NavDropdown.Item>
      <NavDropdown.Item href="#foodsponsor" className="color">Sponsor a family</NavDropdown.Item>
      <NavDropdown.Item href="#food" className="color">Person in Need</NavDropdown.Item>
    </NavDropdown>
    <NavDropdown title="Settings" className="collapsible-nav-dropdown Home">
      <NavDropdown.Item href="#change-password" className="color">Change Password</NavDropdown.Item>
      <NavDropdown.Item href="#sign-out" className="color">Sign-out</NavDropdown.Item>
    </NavDropdown>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up" className="Home">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in" className="Home">Sign In</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#about" className="Home">About</Nav.Link>
    <Nav.Link href="#resources" className="Home">Local Resources</Nav.Link>
    <Nav.Link href="#data" className="Home">Research Data</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar variant="light" expand="md" className="navbarStyle">
    <Navbar.Brand href="#foodforthought" className="Home">
      Food For Thought
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
