import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { useDispatch, useSelector } from 'react-redux';
import { guardarHora } from '../../store/slices/formState';
import { Grid } from '@mui/material';

export function RadioButtons() {
  
    const dispatchHora = useDispatch()
    const {multiStepFormValue} = useSelector( state => state.formState )
    
    const radioGroupHandle = (e) => {
        dispatchHora(guardarHora(e.target.value))
    }

    const disable = [
      '12:00',
      '14:00',
      '16:00',
      '18:00',
      '20:00',
      '22:00',
    ]

    let jsonDisable = {
      medioDia: false,
      dos: false,
      cuatro: false,
      seis: false,
      ocho: false,
      dies: false,
    }

    for(let i = 0 ; i< disable.length ; i++){
      switch(disable[i]){
        case '12:00': jsonDisable.medioDia = true;
          break;
        case '14:00': jsonDisable.dos = true;
          break;
        case '16:00': jsonDisable.cuatro = true;
          break;
        case '18:00': jsonDisable.seis = true;
          break;
        case '20:00': jsonDisable.ocho = true;
          break;
        case '22:00': jsonDisable.dies = true;
          break;
      }
    }

    return (
    <FormControl required={true} variant='filled' >
      <FormLabel  style={{margin:"10px auto", padding:'20px 5px'}} id="demo-row-radio-buttons-group-label">Escoja Un horario</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={radioGroupHandle}
        value={multiStepFormValue.hora}
      >

      <Grid container style={{marginLeft:"22px"}}>
        <Grid xs={4} item style={{padding:"10px"}}>
        <FormControlLabel value="12:00" control={<Radio />} label="12:00" disabled={jsonDisable.medioDia ? true : false} labelPlacement="bottom"  />
        </Grid>
        <Grid xs={4} item  style={{padding:"10px"}}>
        <FormControlLabel value="14:00" control={<Radio />} label="14:00"  labelPlacement="bottom"  />
        </Grid>
        <Grid xs={4} item  style={{padding:"10px"}}>
        <FormControlLabel value="16:00" control={<Radio />} label="16:00"  labelPlacement="bottom"  />
        </Grid>
        <Grid xs={4} item  style={{padding:"10px"}}>
        <FormControlLabel
          value="18:00"
          control={<Radio />}
          label="18:00"
          labelPlacement="bottom" 
        />
        </Grid>
        <Grid xs={4} item  style={{padding:"10px"}}>
        <FormControlLabel
          value="20:00"
          control={<Radio />}
          label="20:00"
          labelPlacement="bottom" 
        />
        </Grid>
        <Grid xs={4} item  style={{padding:"10px"}}>
        <FormControlLabel value="22:00" control={<Radio />} label="22:00" disabled={false} labelPlacement="bottom"  />
        </Grid>
      </Grid>
      </RadioGroup>
    </FormControl>
  );
}


/*
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

*/