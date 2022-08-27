import React from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar } from 'react-bootstrap';

interface props {
  expand: string;
}

function NavBtn({ expand }: props) {
  return (
    <Navbar.Toggle
      className="border-0 shadow-none"
      aria-controls={`offcanvasNavbar-expand-${expand}`}
    >
      <div className="d-flex dpg-dyn-btn-size align-items-center justify-content-center">
        <div className="bg-dpg-teal rounded-circle w-100 h-100 d-flex align-items-center justify-content-center">
          <FontAwesomeIcon className="h2 m-0" icon={faBars} />
        </div>
      </div>
    </Navbar.Toggle>
  );
}

export default NavBtn;
