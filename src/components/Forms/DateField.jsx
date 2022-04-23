import React from 'react'
import { TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { useField } from 'formik'

import { useDispatch, useSelector } from 'react-redux';
import { guardarDia } from '../../store/slices/formState';



export const DateField = ({label, ...props}) => {
  
  const dispatchDia = useDispatch()
  const {multiStepFormValue} = useSelector( state => state.formState )

    const [field, meta] = useField(props)
    
      return (
        <DatePicker
          label={label}
          {...field}
          {...props}
          error={ meta.touched && Boolean(meta.error) }
          helperText={meta.touched && meta.error}
          value={multiStepFormValue.dia}
          onChange={(value) => {
            dispatchDia(guardarDia(value.toString()))
          }}
          renderInput={(params) => <TextField fullWidth style={{marginTop:"30px"}}
          {...params}
          />}
        />
    )
  }
  