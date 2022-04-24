import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Navegacion = () => {

  const [show, setShow] = useState(false);

  function showSwitch() {
    return setShow(!show)
  }

  return <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link onClick={ ()=> showSwitch()} to="/" className="navbar-brand">
      Foodka
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link onClick={ ()=> showSwitch()} to="/nosotros" className="nav-link">Sobre Nosotros</Link>
        </li>
        <li class="nav-item">
          <Link onClick={ ()=> showSwitch()} to="/contacto" className="nav-link">Contáctenos</Link>
        </li>
        <li class="nav-item">
          <Link onClick={ ()=> showSwitch()} to="/reservar" className="nav-link">Reservar</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
};

export default Navegacion;