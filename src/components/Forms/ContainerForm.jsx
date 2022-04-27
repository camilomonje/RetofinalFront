import React from 'react'

import { Card} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import {  InputField } from './InputField';
import { FormStep, MultiStepForm } from './MultiStepForm';
import { RadioButtons } from './RadioButtons';
import { DateField } from './DateField';
import { TextAreaField } from './TextAreaField';

import { useSelector, useDispatch } from 'react-redux';
import { getReservasPorDia, postReservaReducer, setId } from '../../store/slices/formState';
import { InputPersonas } from './InputPersonas';


const baseURL = "https://app-reserva-restaurante-back.herokuapp.com/"



export const ContainerForm = () => {

    const {multiStepFormValue, id} = useSelector( state => state.formState )
    const dispatchId = useDispatch()
    const dispatchGet = useDispatch()

    
    const formatDate = (string)=>{
      let date = new Date(string)
    let formatted_date = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear()
     return formatted_date;
    }

    const postReserva = () => {
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
        
      }).then(res => res.json())
      .then(res => {
        console.log(res.id)
        dispatchId(setId(res.id))
      })
      ;
    };

    const putReserva = (id) => {
      fetch(`${baseURL}api/reserva/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cantidadPersonas:  multiStepFormValue.cantidadPersonas,
          cliente:{
            apellido: multiStepFormValue.cliente.apellido,
            email: multiStepFormValue.cliente.email,
            nombre: multiStepFormValue.cliente.nombre,
          },
          dia: formatDate(multiStepFormValue.dia),
          hora: multiStepFormValue.hora,
          mensaje: multiStepFormValue.mensaje,
          telefono: multiStepFormValue.telefono
        }),
        
      }).then(res => res.json())
      .then(res => console.log(res))
      ;
    };

    const postEmail = () => {
      fetch(`${baseURL}api/reserva/sendEmail`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cantidadPersonas: multiStepFormValue.cantidadPersonas,
          cliente:{
            apellido: multiStepFormValue.cliente.apellido,
            email: multiStepFormValue.cliente.email,
            nombre: multiStepFormValue.cliente.nombre,
          },
          dia: formatDate(multiStepFormValue.dia),
          hora: multiStepFormValue.hora,
          id: id,
          mensaje: multiStepFormValue.mensaje,
          telefono: multiStepFormValue.telefono
        }),
      }).then(res => res).then(res => console.log(res)).catch(err => console.log(err))
    };


  return (
    <Card variant="outlined" style={{maxWidth:605,minHeight:205 ,minWidth:435, margin:"0 auto", padding:'20px 5px'}}>
    <div className="App">
      <header className="App-header">
        <MultiStepForm
          initialValues={{
            name:'',
            email:'',
            number: 0,
            dia: '',
            hora: '',
            pedido:''
          }}
          onSubmit={values => {
            //alert(JSON.stringify(multiStepFormValue, null, 2));
            
            putReserva(id)
            postEmail()
            //console.log(multiStepFormValue)
          }}
        >
          <FormStep 
            stepName='Date' 
            onSubmit={()=> dispatchGet(getReservasPorDia(formatDate(multiStepFormValue.dia)))}
          >
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateField 
                  name='date' 
                  label='Date'
                />
              </LocalizationProvider>
          </FormStep>

          <FormStep 
            stepName='Hora' 
            onSubmit={()=> {
              postReserva()
              //dispatchPost(postReservaReducer(multiStepFormValue, dispatchId, setId))
            }}
          >
                <RadioButtons/>
          </FormStep>

          <FormStep 
            stepName='Contacto' 
            onSubmit={()=> console.log("Step 3 submit")} 
          >
            <InputField 
                name='name' 
                label='Nombre' 
              />

            <InputField 
                name='number' 
                label='Apellido' 
              />

            <InputField 
                name='email' 
                label='Email'
            />

            <InputField 
                name='telefono' 
                label='Telefono'
            />
          
          </FormStep>

          <FormStep 
            stepName='Pedido' 
            onSubmit={()=> console.log("Step 4 submit")} 
          >
              <InputPersonas
                name='personas' 
                label='Cantidad Personas'
              />

              <TextAreaField
                name='pedido' 
                label='Pedido'
              />
          </FormStep>

        </MultiStepForm>
      </header>
    </div>
    </Card>
  )
}
