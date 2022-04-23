import { TextField } from '@mui/material'
import { useField } from 'formik'
import React from 'react'
import { useDispatch} from 'react-redux';
import { guardarPedido } from '../../store/slices/formState';

export const TextAreaField = ({label, ...props}) => {
  
    const [field, meta] = useField(props)

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
          error={ meta.touched && Boolean(meta.error) }
          helperText={meta.touched && meta.error}
          style={{marginTop:30}}
      />
    )
  }
