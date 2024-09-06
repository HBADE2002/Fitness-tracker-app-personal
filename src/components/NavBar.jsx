import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Tabs, TabList } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand as={Link} to="/" className='font-text nav-header-text-box-container'>JOSH</Navbar.Brand>
          <Nav className="me-auto">
            <Tabs variant='soft-rounded' colorScheme='green'>
              <TabList className='nav-text-box-container'>
                <Link className="NavText font-text" to="/">Home</Link>
                <Link className="NavText font-text" to="/personal-info-page">Personal Info</Link>
                <Link className="NavText font-text" to="/activity-page">Activity Page</Link>
                <Link className="NavText font-text" to="/goal-setting-page">Goal Setting</Link>
                <Link className="NavText font-text" to="/about-page">About</Link>
              </TabList>
            </Tabs>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;