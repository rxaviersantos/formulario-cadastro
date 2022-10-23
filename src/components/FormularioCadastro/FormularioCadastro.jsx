import { StepLabel, Stepper, Typography, Step } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from "./DadosUsuario"


function FormularioCadastro({Enviar}){
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});

    useEffect(() =>{
        if(etapaAtual === formularios.length-1){
            Enviar(dadosColetados)
        }
    })
    
    const formularios = [
        <DadosUsuario Enviar={coletarDados} />, 
        <DadosPessoais Enviar={coletarDados} />,  
        <DadosEntrega Enviar={coletarDados}  />,
        <Typography variant='h5'>Obrigado pelo Cadastro</Typography>
    ]

    function coletarDados(dados){
        setDados({...dadosColetados, ...dados})
        proximo()
    }

    function proximo(){
        setEtapaAtual(etapaAtual +1 )
    }
    
    return(
        <>
        <Stepper activeStep={etapaAtual}>
            <Step><StepLabel>Login</StepLabel></Step>
            <Step><StepLabel>Pessoal</StepLabel></Step>
            <Step><StepLabel>Entrega</StepLabel></Step>
            <Step><StepLabel>Finalização</StepLabel></Step>
        </Stepper>
        {formularios[etapaAtual]}
        </>
    )
}

export default FormularioCadastro;