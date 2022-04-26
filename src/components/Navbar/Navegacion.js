import { Nav, Navbar } from 'react-bootstrap';

const Navegacion = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-light bg-light fixed-top">
      <Navbar.Brand href="/">
        <img src="https://cdn-icons-png.flaticon.com/512/1857/1857924.png"
          alt="logofoodka" width="30" height="24"
          className="d-inline-block align-text-top" />
        Foodka
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      </Navbar.Collapse>
    </Navbar>
  )
};

export default Navegacion;