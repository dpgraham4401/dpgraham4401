import React from 'react';
import { Navbar, Offcanvas, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface props {
  expand: string;
}

function NavMenu({ expand }: props) {
  return (
    <Navbar.Offcanvas
      className="bg-dark"
      id={`offcanvasNavbar-expand-${expand}`}
      aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
      placement="end"
    >
      <Offcanvas.Header className="bg-dpg-teal" closeButton>
        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
          <h1 className={'text-white m-0'}>Menu</h1>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Link to="/" className="text-light text-decoration-none me-3">
            <h3>Home</h3>
          </Link>
          <Link to="/blog" className="text-light text-decoration-none me-3">
            <h3>Blog</h3>
          </Link>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  );
}

export default NavMenu;
