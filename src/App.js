import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro"
import {Container, Typography} from "@mui/material"
import 'fontsource-roboto'


class  App extends Component {
  render() {
    return(
      <>
      <Container component="article" maxWidth="sm">
        <Typography variant='h3' component='h1' algin='center'>Formulário de Cadastro</Typography>
        <FormularioCadastro/>
      </Container> 
      </>
    )
  }
}

export default App;
