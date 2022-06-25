import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <footer
      className="bg-dpg-teal bg-gradient">
      <div className="container py-2">
        <ul className="">
          <li className="text-center list-unstyled">
            <a className="text-black mx-3"
               href="https://www.linkedin.com/in/dgraham4401/">
              <FontAwesomeIcon className="h1" icon="fa-brands fa-linkedin"/>
            </a>
            <a className="text-black mx-3"
               href="https://github.com/dpgraham4401/">
              <FontAwesomeIcon className="h1" icon="fa-brands fa-github"/>
            </a>
            <a className="text-black mx-3"
               href="https://www.instagram.com/instagraham4401/">
              <FontAwesomeIcon className="h1"
                               icon="fa-brands fa-instagram-square"/>
            </a>
          </li>
        </ul>
        <div className="clear"></div>
      </div>
    </footer>
  );
}

export default Footer;
