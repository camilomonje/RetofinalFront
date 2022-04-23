import React,{useState} from 'react'
import * as yup from 'yup';

import { Card} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import {  InputField } from './InputField';
import { FormStep, MultiStepForm } from './MultiStepForm';
import { RadioButtons } from './RadioButtons';
import { DateField } from './DateField';
import { TextAreaField } from './TextAreaField';

import { useSelector } from 'react-redux';



export const ContainerForm = () => {

    const {multiStepFormValue} = useSelector( state => state.formState )   
 
  return (
    <Card variant="outlined" style={{maxWidth:605,minHeight:205 ,margin:"0 auto", padding:'20px 5px', marginTop:200}}>
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
            onSubmit={()=> console.log("Step 2 submit")} 
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
                name='email' 
                label='Email' 
              />

          <InputField 
                name='number' 
                label='Phone Number' 
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
