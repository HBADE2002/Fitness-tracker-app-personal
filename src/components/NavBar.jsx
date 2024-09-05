import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href='#home'>JOSH</Navbar.Brand>
          <Nav className="me-auto ">

            {/* <Link className="navText" to="/">Home</Link> */}
            <Link className="NavText"  to="/activity-page">Activity Page</Link>
            <Link className="NavText" to="/personal-info-page">Personal Info</Link>
            <Link className="NavText"  to="/goal-setting-page">Goal Setting</Link>
            <Link className="NavText"  to="/about-page">About</Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}

export default ColorSchemesExample;