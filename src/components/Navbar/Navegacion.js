
import { Link } from 'react-router-dom';


const Navegacion = () => {
  return
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src="https://cdn-icons-png.flaticon.com/512/1857/1857924.png" alt="logofoodka" width="30" height="24" className="d-inline-block align-text-top" />
              Foodka
            </a>
          </div>
        </nav>
        <button className="navbar-toggler" type="button"
          data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <Link to="/nosotros" className="nav-link">Sobre Nosotros</Link>
            <Link to="/contacto" className="nav-link">Contáctenos</Link>
          </ul>
        </div>
      </nav>
    </nav>
  </div>
};

export default Navegacion;