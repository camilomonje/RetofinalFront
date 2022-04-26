import React from "react"

const Contact = () => {
  return <React.Fragment>
    <div id = "seccionContacto" className="container">
    <h3>Contáctenos</h3>
    <div className="row">
  <div className="col">
    <input type="text" className="form-control" placeholder="Primer Nombre" aria-label="First name"/>
  </div>
  <div className="col">
    <input type="text" className="form-control" placeholder="Apellido" aria-label="Last name"/>
  </div>
</div>
  <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Direccion de correo</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Dejanos tu comentario aquí...</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
</div>
</React.Fragment>
}

export default Contact