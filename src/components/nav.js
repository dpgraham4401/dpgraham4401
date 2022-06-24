import React from "react";
import {Navbar, Container, Nav} from "react-bootstrap";

const NavBtn = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand className="bg-dpg-teal bg-gradient rounded-circle"
                      href="#home">
          <img
            src="/rp_bg_trans.png"
            width="120"
            height="100"
            alt="DPGraham logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          className="p-0 border-0 rounded-circle"
          aria-controls="basic-navbar-nav">
          <p
            className="bg-dpg-teal rounded-circle px-4 py-2 h3 fw-bolder">X</p>
        </Navbar.Toggle>
        <Navbar.Collapse className="" id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-white h4" href="#home">Home</Nav.Link>
            <Nav.Link className="text-white h4" href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBtn;
