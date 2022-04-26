import React from "react"
import imagenlogo from "../../assets/img/Foodka.jpg"
import imagenalmuerzo from "../../assets/img/almuerzo1.jpg"
import Footer from "./Footer"
import Dialog from "../Forms/Dialog"
import Reservar from "./Reservar"
import ShowReservations from "../Buttons/ShowReservations"

const Home = () => {
  return (
    <div>
      <div className="card mb-3 align-items-center">
        <img src={imagenlogo} className="img-fluid" />
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Reserva</h5>
              <p className="card-text">Reserva nuestra mesa exclusiva</p>
              <Dialog>
                <Reservar />
              </Dialog>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Mis reservas</h5>
              <p className="card-text">¡Busca aquí tus reservas pendientes!</p>
              <ShowReservations />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-4">
            <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={imagenalmuerzo} className="d-block w-100" />
                  <div>
                    <h5>Desayunos</h5>
                    <p>Deliciosos desayunos</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={imagenalmuerzo} className="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
              </button>
            </div>
          </div>
          <div className="col-4">
            <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={imagenalmuerzo} className="d-block w-100" />
                  <div>
                    <h5>Almuerzos</h5>
                    <p>Deliciosos almuerzos</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={imagenalmuerzo} className="d-block w-100" alt="..." />
                </div>
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
              </button>
            </div>
          </div>
          <div className="col-4">
            <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={imagenalmuerzo} className="d-block w-100" />
                  <div>
                    <h5>Cenas</h5>
                    <p>Deliciosas cenas</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={imagenalmuerzo} className="d-block w-100" alt="..." />
                </div>
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home
