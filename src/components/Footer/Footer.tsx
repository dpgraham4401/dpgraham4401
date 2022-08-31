import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { ListGroup } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-primary bg-gradient py-3">
      <ListGroup horizontal className="d-flex justify-content-center">
        <ListGroup.Item
          as="a"
          href="https://www.linkedin.com/in/dpgraham4401/"
          className="border-0 bg-transparent link-dpg-light"
        >
          <FontAwesomeIcon className="h1" icon={faLinkedin} />
        </ListGroup.Item>
        <ListGroup.Item
          as="a"
          href="https://github.com/dpgraham4401"
          className="border-0 bg-transparent link-dpg-light"
        >
          <FontAwesomeIcon className="h1" icon={faGithub} />
        </ListGroup.Item>
        <ListGroup.Item
          as="a"
          href="https://twitter.com/Dpgraham4401"
          className="border-0 bg-transparent link-dpg-light"
        >
          <FontAwesomeIcon className="h1" icon={faTwitter} />
        </ListGroup.Item>
      </ListGroup>
    </footer>
  );
}

export default Footer;
