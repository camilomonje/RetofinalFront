import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { useDispatch, useSelector } from 'react-redux';
import { guardarHora } from '../../store/slices/formState';

export function RadioButtons() {
  
    const dispatchHora = useDispatch()
    const {multiStepFormValue} = useSelector( state => state.formState )
    
    const radioGroupHandle = (e) => {
        dispatchHora(guardarHora(e.target.value))
    }

    return (
    <FormControl >
      <FormLabel style={{margin:"10px auto", padding:'20px 5px'}} id="demo-row-radio-buttons-group-label">Escoja Un horario</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={radioGroupHandle}
        value={multiStepFormValue.hora}
      >
        <FormControlLabel value="12:00-14:00" control={<Radio />} label="12:00-14:00" disabled={false} labelPlacement="bottom"  />
        <FormControlLabel value="14:00-16:00" control={<Radio />} label="14:00-16:00"  labelPlacement="bottom"  />
        <FormControlLabel value="16:00-18:00" control={<Radio />} label="16:00-18:00"  labelPlacement="bottom"  />
        <FormControlLabel
          value="18:00-20:00"
          control={<Radio />}
          label="18:00-20:00"
          labelPlacement="bottom" 
        />
        <FormControlLabel
          value="20:00-22:00"
          control={<Radio />}
          label="20:00-22:00"
          labelPlacement="bottom" 
        />
      </RadioGroup>
    </FormControl>
  );
}