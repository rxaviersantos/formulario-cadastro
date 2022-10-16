import { Button, TextField } from "@mui/material";
import React from "react";

function DadosUsuario(){
    return(
        <form>
            <TextField 
            id="email" 
            label="email" 
            type="email" 
            variant="outlined" 
            margin='dense' 
            fullWidth />

            <TextField 
            id="senha" 
            label="senha" 
            type="password" 
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