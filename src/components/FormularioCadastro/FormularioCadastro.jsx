import { Typography } from '@mui/material';
import React, { useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from "./DadosUsuario"


function FormularioCadastro({Enviar, isValidCPF}){
    const [etapaAtual, setEtapaAtual] = useState(0);
    return(
        <>
        {formularioAtual(etapaAtual)}
        </>
    )
}

function formularioAtual(etapa){
    switch(etapa){
        case 0:
            return <DadosUsuario/>
        case 1:
            return <DadosPessoais/>
        case 2: 
            return  <DadosEntrega/> 
        default:
            return <Typography>Erro ao selecionar formulário</Typography>   
    }
}

export default FormularioCadastro;