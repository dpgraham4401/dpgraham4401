import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-dpg-teal bg-gradient">
      <div className="container">
        <ul>
          <li className="text-center list-unstyled">
            <a className="dark-link mx-3"
               href="https://www.linkedin.com/in/dgraham4401/">linkedin
              {/*<h2 className="fa-brands fa-linkedin fa-2x"></h2>*/}
            </a>
            <a className="dark-link mx-3"
               href="https://github.com/dpgraham4401/">github
              {/*<h2 className="fa-brands fa-github fa-2x"></h2>*/}
            </a>
            <a className="dark-link mx-3"
               href="https://www.instagram.com/instagraham4401/">instagram
              {/*<h2 className="fa-brands fa-instagram-square fa-2x"></h2>*/}
            </a>
          </li>
        </ul>
        <div className="clear"></div>
      </div>
    </footer>
  );
}

export default Footer;
