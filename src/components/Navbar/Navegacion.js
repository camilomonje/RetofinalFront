import { Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navegacion = () => {
  return(
      <Navbar collapseOnSelect expand="lg" className="navbar-light bg-light fixed-top">
        <Navbar.Brand href="/">
          <img src="https://cdn-icons-png.flaticon.com/512/1857/1857924.png"
            alt="logofoodka" width="30" height="24"
            className="d-inline-block align-text-top" />
          Foodka
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <Link to="/nosotros" className="nav-link">Sobre Nosotros</Link>
            <Link to="/contacto" className="nav-link">Contáctenos</Link>
          </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
};

export default Navegacion;