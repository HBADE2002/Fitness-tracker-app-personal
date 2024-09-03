import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">JOSH</Navbar.Brand>
          <Nav className="me-auto ">
            <Link className="navText" to="/">Personal Info</Link>
            <Link className="navText"  to="/track-exercise">Track Exercise</Link>
            <Link className="navText"  to="/about">About</Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}

export default ColorSchemesExample;