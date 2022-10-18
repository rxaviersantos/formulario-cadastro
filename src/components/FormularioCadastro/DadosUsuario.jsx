import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

function DadosUsuario({Enviar}){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    return(
        <form onSubmit={(event) =>{
            event.preventDefault()
            Enviar({email, senha});
        }}>
            <TextField 
            value={email}
            onChange={(event) => {
                setEmail(event.target.value)}}
            id="email" 
            label="email" 
            type="email" 
            required
            variant="outlined" 
            margin='dense' 
            fullWidth />

            <TextField 
            value={senha}
            onChange={(event) => {
                setSenha(event.target.value)}}
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