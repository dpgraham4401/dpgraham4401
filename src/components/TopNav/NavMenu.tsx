import React from "react";
import { Navbar, Offcanvas, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

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
      <Offcanvas.Header className="bg-secondary" closeButton>
        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
          <h1 className={"text-white m-0"}>Menu</h1>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Link to="/" className="text-decoration-none m-3 dpg-dark-link h3">
            Home
          </Link>
          <Link
            to="/blog"
            className="text-decoration-none m-3 dpg-dark-link h3"
          >
            Blog
          </Link>
        </Nav>
      </Offcanvas.Body>
      <Container>
        <p className="text-white">
          {" Found a problem? "}
          <a
            href="https://github.com/dpgraham-com/dpgraham-client/issues/new"
            target="_blank"
            className="dpg-dark-link"
            rel="noreferrer"
          >
            {"Report an Issue here "}
            <FontAwesomeIcon icon={faExternalLink} />
          </a>
        </p>
      </Container>
    </Navbar.Offcanvas>
  );
}

export default NavMenu;
