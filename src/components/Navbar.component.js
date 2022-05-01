import React  from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navs = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="navbar-bg">
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto text-xl  text-black font-bold text-justify">
          <LinkContainer to="/all-banks" className="mr-6 m-4 hover:uppercase">
            <Nav.Link>All Banks</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/favorites" className="ml-1 mb-4 hover:uppercase">
            <Nav.Link>Favorites</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Navs;