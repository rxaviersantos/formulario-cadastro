import { Button, TextField } from "@mui/material";
import React from "react";

function DadosUsuario({Enviar}){
    return(
        <form onSubmit={(event) =>{
            event.preventDefault()
            Enviar();
        }}>
            <TextField 
            id="email" 
            label="email" 
            type="email" 
            required
            variant="outlined" 
            margin='dense' 
            fullWidth />

            <TextField 
            id="senha" 
            label="senha" 
            type="password" 
            required
            variant="outlined" 
            margin='dense' 
            fullWidth />

            <Button 
            type="subimit" 
            variant="outlined">
            Cadastrar</Button>

        </form>
    )
}

export default DadosUsuario;