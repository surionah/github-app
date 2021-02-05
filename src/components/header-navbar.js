import {
  Navbar,
  Nav
} from 'react-bootstrap';

function HeaderNavbar({location}) {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
    >
      <Navbar.Brand href="/users">
        <img
          src="../github_logo.png"
          width="50"
          height="50"
          alt="github app logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="github-navbar" />
      <Navbar.Collapse id="github-navbar">
        <Nav
          activeKey={location.pathname}
          className="mr-auto"
        >
          <Nav.Link href="/users/search">Search Users</Nav.Link>
          <Nav.Link href="/repos/search">Search Repositories</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default HeaderNavbar;
