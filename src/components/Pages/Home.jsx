import React from "react"
import imagenlogo from "../../assets/img/Foodka.jpg"
import imagendesayuno from "../../assets/img/desayuno.jpg"
import imagencarnes from "../../assets/img/carnes.jpg"
import imagencena from "../../assets/img/cena.jpg"
import Footer from "./Footer"
import Dialog from "../Forms/Dialog"
import Reservar from "../Pages/Reservar"
import ShowReservations from "../Buttons/ShowReservations"

const Home = () => {
  return (
    <div className="container">
      <div className="card mb-3 align-items-center">
        <img src={imagenlogo} className="img-fluid"></img>
        {/* <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is
            a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div> */}
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Reservar</h5>
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
              <p className="card-text">¡Busca tus reservas pedientes!</p>
              <ShowReservations />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-4">
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <img src={imagencarnes} className="rounded mx-auto d-block" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Almuerzos</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src={imagendesayuno} className="card-img"></img>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={imagendesayuno} className="card-img"></img>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-4">
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <img src={imagendesayuno} className="card-img"></img>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Desayunos</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src={imagenlogo} className="card-img"></img>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={imagenlogo} className="card-img"></img>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-4">
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <img src={imagencena} className="card-img"></img>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Cena</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src={imagenlogo} className="card-img"></img>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={imagenlogo} className="card-img"></img>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-6">
          <div>
            <h3>CONTACTOS CON EMIALS DEL EQUIPO</h3>
          </div>
        </div>
        <div className="col-6">
          <div>
            <h3>ABOUT US</h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
