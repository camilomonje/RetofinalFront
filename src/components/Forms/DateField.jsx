import React from 'react'
import { TextField, Typography } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'

import { useDispatch, useSelector } from 'react-redux';
import { guardarDia } from '../../store/slices/formState';



export const DateField = ({label}) => {
  
  const formatDate = (date)=>{
    let formatted_date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
     return formatted_date;
    }

  const dispatchDia = useDispatch()
  const {multiStepFormValue} = useSelector( state => state.formState )
      return (<>
        
        <Typography textAlign={'center'} style={{marginTop:"40px", padding:'5px 5px'}}>Escoja Un Dia</Typography>
        <DatePicker
          label={label}
          value={multiStepFormValue.dia}
          onChange={(value) => {
            //let valueFormat = formatDate(value)
            dispatchDia(guardarDia(value.toString()))
          }}
          renderInput={(params) => <TextField fullWidth style={{marginTop:"30px"}}
          {...params}
          />}
        />
        </>
    )
  }
  