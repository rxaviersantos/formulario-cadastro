import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'

function FormularioCadastro(){

    return(
    <form>
        <TextField id="nome" label="Nome" variant="outlined" fullWidth />
        <TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth />
        <TextField id="CPF" label="CPF" variant="outlined" fullWidth />
      
        <label>Promoções</label>
        <input type="checkbox"/>
        <label>Novidades</label>
        <input type="checkbox"/>

        <Button type='subimit' variant="outlined"> 
            Cadastrar
        </Button>
    </form>
    )
}

export default FormularioCadastro;