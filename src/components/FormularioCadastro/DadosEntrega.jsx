import React from 'react';
import {TextField, Button} from "@mui/material";

function DadosEntrega(){
    return(
        <form>
             <TextField 
            id="cep" 
            label="CEP" 
            type="number" 
            variant="outlined" 
            margin='dense' 
            />
             <TextField 
            id="endereco" 
            label="Endereço" 
            type="text" 
            variant="outlined" 
            margin='dense' 
            fullWidth 
            />
             <TextField 
            id="numero" 
            label="Numero" 
            type="number" 
            variant="outlined" 
            margin='dense' 
            />
              <TextField 
            id="estado" 
            label="Estado" 
            type="text" 
            variant="outlined" 
            margin='dense' 
            />
              <TextField 
            id="cidade" 
            label="Cidade" 
            type="number" 
            variant="outlined" 
            margin='dense' 
            />
            <Button 
            type="subimit" 
            variant="outlined"
            fullWidth>
            Finalizar Cadastro</Button>

            
        </form>
    )

}
export default DadosEntrega;