import React from 'react'
import { TextField } from '@mui/material'

import { useDispatch } from 'react-redux';
import { guardarEmail, guardarNombre, guardarNumero } from '../../store/slices/formState';

export const InputField = ({label}) => {

  const dispatchName = useDispatch()
  const dispatchEmail = useDispatch()
  const dispatchNumero = useDispatch()

  const handleChange = (e) => {
    switch(label){
      case 'Nombre': dispatchName(guardarNombre(e.target.value.toString())); 
        break;
      case 'Email': dispatchEmail(guardarEmail(e.target.value.toString()));
        break;
      case 'Apellido': dispatchNumero(guardarNumero(e.target.value.toString()))
    }
  }
    return (
    <TextField
        fullWidth 
        label={label}
        onChange={handleChange}
        style={{marginTop:30}}
        required
    />
  )
}
