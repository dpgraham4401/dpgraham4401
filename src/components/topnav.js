import React from "react";
import {Navbar, Container, Nav} from "react-bootstrap";

const NavBtn = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container className="pt-4">
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
          className="border-0 shadow-none"
          aria-controls="basic-navbar-nav">
          <p className="bg-dpg-teal bg-gradient
            rounded-circle px-4 py-3 h2 fw-bolder">X</p>
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
