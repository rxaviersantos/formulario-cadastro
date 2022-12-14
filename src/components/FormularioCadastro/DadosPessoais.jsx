import React, { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from "../../hooks/useErros";



function DadosPessoais({Enviar}){
    const [nome,setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("")
    const [cpf, setCpf] = useState("")
    const [promocoes, setPromocoes] = useState(false)
    const [novidades, setNovidades] = useState(false)
    const validacoes = useContext(ValidacoesCadastro)
    const [erros, validarCampos, possoEnviar] = useErros(validacoes)


    return(
    <form
        onSubmit={(event) => {
            event.preventDefault();
            if (possoEnviar()){
                Enviar({nome, sobrenome, cpf, promocoes, novidades})
            }
        }}>
        <TextField
            value={nome} 
            onChange={(event) => {
              setNome(event.target.value);
            }}
            onBlur={validarCampos}
            error={!erros.nome.valido}
            helperText={erros.nome.texto}
            id="nome"
            label="Nome" 
            name="nome"
            variant="outlined" 
            margin='dense' 
            fullWidth 
        />

        <TextField
            value={sobrenome} 
            onChange={(event) => {
              setSobrenome(event.target.value)
           }}
            id="sobrenome" 
            name="sobrenome"
            label="Sobrenome" 
            variant="outlined" 
            margin='dense'  
            fullWidth 
        />

        <TextField
            value={cpf}
            onChange={(event) => {
              setCpf(event.target.value);
            }}
    
            onBlur={validarCampos}
            error={!erros.cpf.valido}
            helperText={erros.cpf.texto} 
            id="CPF" 
            name="cpf"
            label="CPF" 
            variant="outlined" 
            margin='dense'  
            fullWidth 
        />
      
        <FormControlLabel 
        control={<Checkbox checked={promocoes}
            onChange={(event) =>{
            setPromocoes(event.target.checked)
        }}/>} label="Promo????es" />

        <FormControlLabel 
        control={<Checkbox checked={novidades}
            onChange={(event) =>{
            setNovidades(event.target.checked)
        }}/>} label="Novidades" />

        <Button type='subimit' variant="outlined"> 
            Pr??ximo
        </Button>
    </form>
    )
}  
export default DadosPessoais;