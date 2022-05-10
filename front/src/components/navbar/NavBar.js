import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./NavBar.css";

function NavBar() {
  return (
    <Navbar
      className="navShadow"
      bg="light"
      variant="light"
      fixed="top"
      expand="lg"
    >
      <Container fluid>
        <Navbar.Brand href="/">Navbar scroll</Navbar.Brand>
        <Navbar.Brand href="/">
          {sessionStorage.getItem("username")}
          {sessionStorage.getItem("favourites")}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Car" id="basic-nav-dropdown">
              <NavDropdown.Item href="/cars/filtered">List</NavDropdown.Item>
              <NavDropdown.Item href="/car/add">Add</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Piece" id="basic-nav-dropdown">
              <NavDropdown.Item href="/pieces">List</NavDropdown.Item>
              <NavDropdown.Item href="/piece/add">Add</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/authentification">Authentificate</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
