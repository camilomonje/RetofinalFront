import { createSlice } from "@reduxjs/toolkit";


const baseURL = "https://app-reserva-restaurante-back.herokuapp.com/"
const formatDate = (string)=>{
    let date = Date.parse(string)
  let formatted_date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
   return formatted_date;
  }

export const formStateSlice = createSlice({
    name:'formState',
    initialState:{
        multiStepFormValue:{
            cantidadPersonas: 0,
            cliente:{
                apellido: '',
                email:'',
                nombre:'',
            },
            dia: new Date().toString(),
            hora: '',
            mensaje:'',
            telefono: 0
        },
        id:''
    },
    reducers:{
        setCantidadPersonas:(state, action) => {
            state.multiStepFormValue.cantidadPersonas = action.payload
        },
        setTelefono:(state, action) => {
            state.multiStepFormValue.telefono = action.payload
        },
        setDia:(state, action) => {
            state.multiStepFormValue.dia = action.payload
        },
        setHora:(state, action) => {
            state.multiStepFormValue.hora = action.payload 
        },
        setName:(state, action) => {
            state.multiStepFormValue.cliente.nombre = action.payload
        },
        setEmail:(state, action) => {
            state.multiStepFormValue.cliente.email = action.payload
        },
        setNumber:(state, action) => {
            state.multiStepFormValue.cliente.apellido = action.payload
        },
        setPedido:(state, action) => {
            state.multiStepFormValue.mensaje = action.payload
        },
        setId:(state, action) => {
            state.id = action.payload
        },
    }
})

export const {setDia, setHora, setName, setEmail, setNumber, setPedido, setId, setCantidadPersonas, setTelefono} = formStateSlice.actions;

export const guardarCantidadPersonas = (cantidadPersonas) => (dispatch) => {
    dispatch(setCantidadPersonas(cantidadPersonas))
}

export const guardarTelefono = (telefono) => (dispatch) => {
    dispatch(setTelefono(telefono))
}

export const guardarId = (id) => (dispatch) => {
    dispatch(setId(id))
}

export const guardarDia = (dia) => (dispatch) => {
    dispatch(setDia(dia))
}

export const guardarHora = (hora) => (dispatch) => { 
        dispatch(setHora(hora))
}

export const guardarNombre = (nombre) => (dispatch) => {
    dispatch(setName(nombre))
}

export const guardarEmail = (email) => (dispatch) => {
    dispatch(setEmail(email))
}

export const guardarNumero = (numero) => (dispatch) => {
    dispatch(setNumber(numero))
}

export const guardarPedido = (mensaje) => (dispatch) => {
    dispatch(setPedido(mensaje))
}

export const postReservaReducer = (multiStepFormValue, dispatchId, setId) => (dispatch) => {
    fetch(`${baseURL}api/reserva`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dia: formatDate(multiStepFormValue.dia),
        hora: multiStepFormValue.hora
      }),
    }).then(res => {
        res.json()
        console.log(res)
    })
    .then(res => {
    console.log("Post reserva" + formatDate(multiStepFormValue.dia) + multiStepFormValue.hora)

      console.log(res)
      dispatchId(setId(res.id))
    }).catch(err => console(err))
    ;
  };



export default formStateSlice.reducer;