import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar bg="" expand="md">
      <Container className="p-3">
        <Navbar.Brand href="/" className="h1 fw-bold">
          <h1 className="fw-bold"> Finance Tracker</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto h2">
            {/* <Link to="/" className='nav-link'><i className="fa-solid fa-user"></i></Link> */}
            <Link to="/logout" className="nav-link">
              <i className="fa-solid fa-person-running"></i>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
