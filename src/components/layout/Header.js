import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

export const Header = () => {
  return (
    <Navbar bg="warning" expand="md">
      <Container>
        <Navbar.Brand href="/">FT-V2</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className='nav-link'><i className="fa-solid fa-user"></i></Link>
            <Link to="/register" className='nav-link'><i class="fa-solid fa-right-to-bracket"></i></Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
