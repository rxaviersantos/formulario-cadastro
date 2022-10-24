function isValidCPF(cpf) {
    if(cpf.length !== 11){
      return {valido:false, texto:"CPF deve conter 11 digitos."}
    }else{
      return {valido:true, texto:""}
    }
  }

  function isValidarSenha(senha) {
    if(senha.length < 4 || senha.length > 22){
      return {valido:false, texto:"A senha deve conter 4 e 22 digitos."}
    }else{
      return {valido:true, texto:""}
    }
  }

  export {isValidCPF, isValidarSenha}