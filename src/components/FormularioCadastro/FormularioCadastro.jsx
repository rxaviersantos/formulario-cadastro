import React, { useEffect, useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from "./DadosUsuario"


function FormularioCadastro({Enviar, isValidCPF}){
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});

    useEffect(() =>{
        console.log(dadosColetados)
    })
    
    const formularios = [
        <DadosUsuario Enviar={coletarDados}/>, 
        <DadosPessoais Enviar={coletarDados} isValidCPF={isValidCPF}/>,  
        <DadosEntrega Enviar={coletarDados}/>
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
        {formularios[etapaAtual]}
        </>
    )
}

export default FormularioCadastro;