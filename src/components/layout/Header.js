import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const Header = () => {
  const handleOnLogout = () => {
    sessionStorage.removeItem("user");
  };
  return (
    <Navbar bg="" expand="md">
      <Container className="p-1">
        <Navbar.Brand href="/dashboard">
          <h2 className="logo">BudgetBuddy</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4 h4">
            <Link to="/account" className="nav-link ">
              <i className="fa-solid fa-user"></i>
            </Link>
            <Link to="/" className="nav-link" onClick={handleOnLogout}>
              <i className="fa-solid fa-right-from-bracket"></i>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
