import React, { useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from "./DadosUsuario"


function FormularioCadastro({Enviar, isValidCPF}){
    const [etapaAtual, setEtapaAtual] = useState(0);

    const formularios = [
    <DadosUsuario Enviar={proximo}/>, 
    <DadosPessoais Enviar={proximo} isValidCPF={isValidCPF}/>,  
    <DadosEntrega Enviar={Enviar}/>]

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