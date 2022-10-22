import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

function DadosUsuario({Enviar, validacoes}){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

     const [erros, setErros] = useState({senha:{valido: true, texto:""}})

        function validarCampos(event) {
            const { name, value } = event.target;
            const novoEstado = { ...erros };
            novoEstado[name] = validacoes[name](value);
            setErros(novoEstado);
        }
    
        function possoEnviar() {
            for (let campo in erros) {
                if (!erros[campo].valido) {
                return false;
                }
            }
            return true;
        }

    return(
        <form onSubmit={(event) =>{
            event.preventDefault()
            if(possoEnviar()){
                Enviar({email, senha});
            }
        }}>
            <TextField 
            value={email}
            onChange={(event) => {
                setEmail(event.target.value)
            }}
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
                setSenha(event.target.value)
            }}
            onBlur={validarCampos}
            error={!erros.senha.valido}
            helperText={erros.senha.texto}   
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
            Próximo</Button>

        </form>
    )
}

export default DadosUsuario;