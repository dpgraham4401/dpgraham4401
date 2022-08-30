import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBtn from "./NavBtn";
import NavMenu from "./NavMenu";

function TopNav() {
  const expand = "lg";
  return (
    <Container>
      <Navbar key={expand} bg="dark" expand={expand} className="mb-3">
        <Container fluid>
          <Navbar.Brand
            as={Link}
            className="bg-primary bg-gradient rounded-circle"
            to="/"
          >
            <img
              src="/rp_bg_trans.png"
              width={"120"}
              height={"100"}
              alt="DPGraham"
            />
          </Navbar.Brand>
          <NavBtn expand={expand} />
          <NavMenu expand={expand} />
        </Container>
      </Navbar>
    </Container>
  );
}

export default TopNav;
