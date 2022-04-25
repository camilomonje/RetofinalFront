import { useState } from "react"
import Button from "@mui/material/Button"

const ShowReservations = () => {
  //   const [buscador, setBuscador] = useState(false)
  //   const [input, setInput] = useState("")
  //   const [reserva, setReserva] = useState([])
  //   const [busquedaRealizada, setBusquedaRealizada] = useState(false)
  //   const [error, setError] = useState("")

  const baseUrl = `${process.env.REACT_APP_API_URL}/`
  const endPoint = `${input}`

  //   const search = () => {
  //     fetch(baseUrl + endPoint)
  //       .then((response) => {
  //         return response.json()
  //       })
  //       .then((data) => {
  //         setReserva(data)
  //         setBusquedaRealizada(true)
  //       })
  //       .catch((error) => {
  //         setError(error)
  //       })

  return (
    <div>
      <Button variant="outlined"> Mis reservas</Button>
      {/* 
      {buscador ? (
        <div>
          <label>Ingresa tu código de reserva</label>

          <input
            type="text"
            placeholder="Código de reseva"
            onChange={(e) => {
              setInput(e.target.value)
              setBusquedaRealizada(false)
            }}
          />
          <br />
          <button onClick={() => setBuscador(false)}>Cancelar</button>
          <button onClick={search}>Buscar</button>
          {busquedaRealizada ? (
            <div>
              <h4>Reserva</h4>

              <p>Dia de la reserva: {reserva.dia}</p>
              <p>Hora de la reserva: {reserva.hora}</p>
              <p>Pedido: {reserva.mensaje}</p>
            </div>
          ) : (
            <></>
          )}

          {error ? <p>No hay reservaciones con este codigo</p> : <></>}
        </div>
      ) : (
        <></>
      )} */}
    </div>
  )
}

export default ShowReservations
