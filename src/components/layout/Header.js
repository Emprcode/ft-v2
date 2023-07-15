import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar bg="" expand="md">
      <Container className="p-3">
        <Navbar.Brand href="/">
          <h2 className="logo"> Finance Tracker</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4 h4">
            {/* <Link to="/" className='nav-link'><i className="fa-solid fa-user"></i></Link> */}
            <Link to="/account" className="nav-link ">
              <i className="fa-solid fa-user"></i>
            </Link>
            <Link to="/" className="nav-link">
              <i className="fa-solid fa-right-from-bracket"></i>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
