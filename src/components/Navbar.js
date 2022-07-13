import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function SiteNavbar() {
  const portfolio_links = [
    ["Home", "/"],
    ["About me", "https://kamilslabosz.github.io/portfolio/"],
    ["Contact", "https://tabletop-group.herokuapp.com/contact-me"]
  ];

  const apps = [
    ["Tabletop Group", "https://tabletop-group.herokuapp.com"],
    ["Todo list", "https://tabletop-group.herokuapp.com/todo"],
    ["Random Training", "https://random-training-video.herokuapp.com/"]
  ];

  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {portfolio_links.map((content) => (
              <Nav.Link href={content[1]}>{content[0]}</Nav.Link>
            ))}
            <NavDropdown title="Apps" id="basic-nav-dropdown">
              {apps.map((content) => (
                <NavDropdown.Item href={content[1]}>
                  {content[0]}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SiteNavbar;
