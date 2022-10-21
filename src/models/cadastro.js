function isValidCPF(cpf) {
    if(cpf.length !== 11){
      return {valido:false, texto:"CPF deve conter 11 digitos."}
    }else{
      return {valido:false, texto:""}
    }
  }

  function isValidarSenha(senha) {
    if(senha.length < 4 || senha.length > 52){
      return {valido:false, texto:"A senha deve conter 4 e 52 digitos."}
    }else{
      return {valido:false, texto:""}
    }
  }

  export {isValidCPF, isValidarSenha}