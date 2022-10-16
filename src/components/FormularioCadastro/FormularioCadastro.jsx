import React from 'react';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from "./DadosUsuario"


function FormularioCadastro({Enviar, isValidCPF}){
    return(
        <>
        <DadosPessoais Enviar={Enviar} isValidCPF={isValidCPF}/>
        <DadosUsuario/>
        </>
    )
}

export default FormularioCadastro;