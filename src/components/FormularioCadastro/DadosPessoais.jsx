import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel';


function DadosPessoais({Enviar, isValidCPF}){
    const [nome,setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("")
    const [cpf, setCpf] = useState("")
    const [promocoes, setPromocoes] = useState(false)
    const [novidades, setNovidades] = useState(false)
    const [erros, setErros] = useState({cpf:{valido:true, texto:""}})

    return(
    <form
        onSubmit={(event) => {
            event.preventDefault();
            Enviar({nome, sobrenome, cpf, promocoes, novidades})
        }}>
        <TextField
            value={nome} 
            onChange={(event) => {
              setNome(event.target.value);
            }}
        id="nome"
        label="Nome" 
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
    
            onBlur={(event)=>{
              const ehValido = isValidCPF(cpf);
              setErros({cpf:ehValido})
            }}
            error={!erros.cpf.valido}
            helperText={erros.cpf.texto} 
        id="CPF" 
        label="CPF" 
        variant="outlined" 
        margin='dense'  
        fullWidth 
        />
      
        <FormControlLabel 
        control={<Checkbox checked={promocoes}
            onChange={(event) =>{
            setPromocoes(event.target.checked)
        }}/>} label="Promoções" />

        <FormControlLabel 
        control={<Checkbox checked={novidades}
            onChange={(event) =>{
            setNovidades(event.target.checked)
        }}/>} label="Novidades" />

        <Button type='subimit' variant="outlined"> 
            Cadastrar
        </Button>
    </form>
    )
}

export default DadosPessoais;