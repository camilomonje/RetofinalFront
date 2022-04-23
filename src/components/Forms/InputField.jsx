import React from 'react'
import { TextField } from '@mui/material'
import { useField } from 'formik'

import { useDispatch } from 'react-redux';
import { guardarEmail, guardarNombre, guardarNumero } from '../../store/slices/formState';

export const InputField = ({label, ...props}) => {
  
  const [field, meta] = useField(props)

  const dispatchName = useDispatch()
  const dispatchEmail = useDispatch()
  const dispatchNumero = useDispatch()

  const handleChange = (e) => {
    switch(label){
      case 'Nombre': dispatchName(guardarNombre(e.target.value.toString())); 
        break;
      case 'Email': dispatchEmail(guardarEmail(e.target.value.toString()));
        break;
      case 'Phone Number': dispatchNumero(guardarNumero(e.target.value.toString()))
    }
  }
    return (
    <TextField
        fullWidth 
        label={label}
        onChange={handleChange}
        error={ meta.touched && Boolean(meta.error) }
        helperText={meta.touched && meta.error}
        style={{marginTop:30}}
        
    />
  )
}
