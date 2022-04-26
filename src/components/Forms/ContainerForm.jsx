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
import { setId } from '../../store/slices/formState';


const baseURL = "https://app-reserva-restaurante-back.herokuapp.com/"






export const ContainerForm = () => {

    const {multiStepFormValue, id} = useSelector( state => state.formState )
    const dispatchId = useDispatch()
 
    const postReserva = () => {
      fetch(`${baseURL}api/reserva`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cliente:{
            apellido: '',
            email: '',
            nombre: '',
          },
          dia: multiStepFormValue.dia,
          hora: multiStepFormValue.hora,
          mensaje: '',
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
          cliente:{
            apellido: multiStepFormValue.cliente.apellido,
            email: multiStepFormValue.cliente.email,
            nombre: multiStepFormValue.cliente.nombre,
          },
          dia: multiStepFormValue.dia,
          hora: multiStepFormValue.hora,
          mensaje: multiStepFormValue.mensaje,
        }),
        
      }).then(res => res.json())
      .then(res => console.log(res))
      ;
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
            date: '',
            hora: '',
            pedido:''
          }}
          onSubmit={values => {
            alert(JSON.stringify(multiStepFormValue, null, 2));
            
            putReserva(id)
            console.log(multiStepFormValue)
          }}
        >
          <FormStep 
            stepName='Date' 
            onSubmit={()=> console.log("Step 1 submit")}
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
              console.log("Post reserva")
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

          
          </FormStep>

          <FormStep 
            stepName='Pedido' 
            onSubmit={()=> console.log("Step 4 submit")} 
          >
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
