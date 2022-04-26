import { createSlice } from "@reduxjs/toolkit";

const formatDate = (date)=>{
    let formatted_date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
     return formatted_date;
    }

export const formStateSlice = createSlice({
    name:'formState',
    initialState:{
        multiStepFormValue:{
            cliente:{
                apellido: '',
                email:'',
                nombre:'',
            },
            dia: formatDate(new Date()),
            hora: '',
            mensaje:'',
        },
        id:''
    },
    reducers:{
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

export const {setDia, setHora, setName, setEmail, setNumber, setPedido, setId} = formStateSlice.actions;

export const guardarId = (id) => (dispatch) => {
    dispatch(setId(id))
}

export const guardarDia = (dia) => (dispatch) => {
    //let diaFormateado = formatDate(dia)
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



export default formStateSlice.reducer;