import { Typography } from '@mui/material';
import React, { useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from "./DadosUsuario"


function FormularioCadastro({Enviar, isValidCPF}){
    const [etapaAtual, setEtapaAtual] = useState(0);

    function proximo(){
        setEtapaAtual(etapaAtual+1)
    }

    function formularioAtual(etapa){
        switch(etapa){
            case 0:
                return <DadosUsuario Enviar={proximo}/>
            case 1:
                return <DadosPessoais Enviar={proximo} isValidCPF={isValidCPF} />
            case 2: 
                return  <DadosEntrega Enviar={Enviar}/> 
            default:
                return <Typography>Erro ao selecionar formulário</Typography>   
        }
    }
    
    return(
        <>
        {formularioAtual(etapaAtual)}
        </>
    )
}


export default FormularioCadastro;