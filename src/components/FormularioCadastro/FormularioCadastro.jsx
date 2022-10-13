import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel';


function FormularioCadastro(){

    return(
    <form>
        <TextField id="nome" label="Nome" variant="outlined" margin='dense' fullWidth />
        <TextField id="sobrenome" label="Sobrenome" variant="outlined" margin='dense'  fullWidth />
        <TextField id="CPF" label="CPF" variant="outlined" margin='dense'  fullWidth />
      
   
      <FormControlLabel control={<Checkbox defaultChecked />} label="Promoções" />
 
      <FormControlLabel control={<Checkbox defaultChecked />} label="Novidades" />
        

        <Button type='subimit' variant="outlined"> 
            Cadastrar
        </Button>
    </form>
    )
}

export default FormularioCadastro;