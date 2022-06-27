import React from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import IconButton from "./topnavbtn";
import {Link} from "react-router-dom";

const TopNav = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container className="pt-4">
        <Navbar.Brand as={Link}
                      className="bg-dpg-teal bg-gradient rounded-circle"
                      to="/">
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
          <IconButton/>
        </Navbar.Toggle>
        <Navbar.Collapse className="" id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} className="text-white h4"
                      to="/">Home</Nav.Link>
            <Nav.Link as={Link} className="text-white h4"
                      to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} className="text-white h4"
                      to="/tutorials">Tutorials</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <Router>
    //   <div>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/about">About</Link>
    //       </li>
    //       <li>
    //         <Link to="/dashboard">Dashboard</Link>
    //       </li>
    //     </ul>
    //
    //     <hr />
    //
    //     {/*
    //         A <Switch> looks through all its children <Route>
    //         elements and renders the first one whose path
    //         matches the current URL. Use a <Switch> any time
    //         you have multiple routes, but you want only one
    //         of them to render at a time
    //       */}
    //     <Switch>
    //       <Route exact path="/">
    //         <Home />
    //       </Route>
    //       <Route path="/about">
    //         <About />
    //       </Route>
    //       <Route path="/dashboard">
    //         <Dashboard />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default TopNav;
