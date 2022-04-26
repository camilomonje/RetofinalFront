import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ContainerForm } from '../Forms/ContainerForm';
import CustomizedDialogs from '../Forms/Dialog';

const Navegacion = () => {

  const [show, setShow] = useState(false);

  function showSwitch() {
    return setShow(!show)
  }

  return <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link onClick={() => showSwitch()} to="/" className="navbar-brand" >
        Foodka
      </Link>
      <button className="navbar-toggler" type="button"
        data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link onClick={() => showSwitch()} to="/nosotros" className="nav-link">Sobre Nosotros</Link>
          </li>
          <li className="nav-item">
            <Link onClick={() => showSwitch()} to="/contacto" className="nav-link">Contáctenos</Link>
          </li>
        </ul>
        <CustomizedDialogs>
          <ContainerForm />
        </CustomizedDialogs>
      </div>
    </div>

  </nav>
};

export default Navegacion;