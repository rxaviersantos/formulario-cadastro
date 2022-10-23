import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro"
import {Container, Typography} from "@mui/material"
import 'fontsource-roboto'

import {isValidCPF, isValidarSenha} from "./models/cadastro"
import ValidacoesCadastro from './contexts/ValidacoesCadastro';
class  App extends Component {
  render() {
    return(
      <>
      <Container component="article" maxWidth="sm">
        <Typography variant='h3' component='h1' algin='center'>Formulário de Cadastro</Typography>
        <ValidacoesCadastro.Provider value={{cpf:isValidCPF, senha:isValidarSenha, nome:isValidarSenha}} />
        <FormularioCadastro Enviar={EnviarForm}/>
      </Container> 
      </>
    )
  }
}

function EnviarForm(dados){
  console.log(dados)
}

export default App;
