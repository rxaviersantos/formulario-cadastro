import React from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from "./DadosUsuario"


function FormularioCadastro({Enviar, isValidCPF}){
    return(
        <>
        <DadosPessoais Enviar={Enviar} isValidCPF={isValidCPF}/>
        <DadosUsuario/>
        <DadosEntrega/>
        </>
    )
}

export default FormularioCadastro;