import { TextField } from '@mui/material'
import React from 'react'
import { useDispatch} from 'react-redux';
import { guardarPedido } from '../../store/slices/formState';

export const TextAreaField = ({label}) => {
  

    const dispatchPedido = useDispatch()

    const handleChange = (e) => {
      dispatchPedido(guardarPedido(e.target.value.toString()))
    }
  
      return (
      <TextField
          multiline={true}
          minRows={3}
          fullWidth 
          label={label}
          onChange={handleChange}
          style={{marginTop:30}}
      />
    )
  }
