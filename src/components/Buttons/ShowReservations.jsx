import { useState } from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"

const ShowReservations = () => {
  const [buscador, setBuscador] = useState(false)
  const [input, setInput] = useState("")
  const [reserva, setReserva] = useState([])
  const [busquedaRealizada, setBusquedaRealizada] = useState(false)
  const [error, setError] = useState("")

  const baseUrl = `${process.env.REACT_APP_API_URL}/`
  const endPoint = `${input}`

  const search = () => {
    fetch(baseUrl + endPoint)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setReserva(data)
        setBusquedaRealizada(true)
      })
      .catch((error) => {
        setError(error)
      })
  }
  return (
    <div>
      <Button variant="outlined" onClick={() => setBuscador(true)}>
        Mis reservas
      </Button>

      {buscador ? (
        <div>
          <br />
          <label>Ingresa tu código de reserva</label>
          <br />
          <TextField
            label="Código de reseva"
            variant="outlined"
            onChange={(e) => {
              setInput(e.target.value)
              setBusquedaRealizada(false)
              setError("")
            }}
          />
          <br />
          <Button variant="outlined" onClick={() => setBuscador(false)}>
            Cancelar
          </Button>
          <Button variant="outlined" onClick={search}>
            Buscar
          </Button>
          {busquedaRealizada ? (
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "50ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <br />
              <div>
                <h4>Reserva</h4>
                <TextField id="day-disabled" disabled label="Día de la reserva" defaultValue={reserva.dia} />
                <TextField id="time-disabled" disabled label="Hora de la reserva" defaultValue={reserva.hora} />
                <TextField
                  id="customername-disabled"
                  disabled
                  label="Nombre del cliente"
                  defaultValue={reserva.cliente.nombre}
                />
                <TextField
                  id="customersurname-disabled"
                  disabled
                  label="Apellido del cliente"
                  defaultValue={reserva.cliente.apellido}
                />
                <TextField
                  id="customeremail-disabled"
                  disabled
                  label="Correo electrónico"
                  defaultValue={reserva.cliente.email}
                />
                <TextField id="order-disabled" disabled label="Pedido" defaultValue={reserva.mensaje} />
                <Button variant="outlined">Modificar pedido</Button>
                <Button variant="outlined">Cancelar reserva</Button>
              </div>
            </Box>
          ) : (
            <></>
          )}

          {error ? <p>No hay reservaciones con este codigo</p> : <></>}
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default ShowReservations
