import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';

function HeaderNavbar({location}) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
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
        <Nav activeKey={location.pathname} className="mr-auto">
          <Nav.Link href="/users">Users</Nav.Link>
          <Nav.Link href="/repos">Repositories</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default HeaderNavbar;