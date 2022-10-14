import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel';


function FormularioCadastro(){
    const [nome,setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("")

    return(
    <form
        onSubmit={(event) => {
            event.preventDefault();
            console.log(nome, sobrenome)
        }}>

        <TextField
           value={nome} onChange={(event) => {let tmpNome = event.target.value;
            if (tmpNome.length >= 3) {
                tmpNome = (tmpNome.substr(0, 3))
            }
            setNome(tmpNome)
        }}
        id="nome" label="Nome" variant="outlined" margin='dense' fullWidth />


        <TextField
           value={sobrenome} onChange={(event) => {setSobrenome(event.target.value)
           
        }}
        id="sobrenome" label="Sobrenome" variant="outlined" margin='dense'  fullWidth />


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