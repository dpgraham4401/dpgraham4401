import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <footer className="bg-dpg-teal bg-gradient">
      <div className="container py-2">
        <p>hello footer</p>
        <div>
          <FontAwesomeIcon icon="check-square" />
          Your <FontAwesomeIcon icon="coffee" /> is hot and ready!
        </div>
        <div className="clear"></div>
      </div>
    </footer>
  );
}

export default Footer;
