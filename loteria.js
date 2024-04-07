let ganhador = {
    nome: 'Adamastor',
    nascimento: '16/09/1986',
    cpf: '123.321.789-98',
    estadoCivil: 'Casado'
  }


function supostoGanhador(nome,cpf){
   let name =  nome.charAt(0).toUpperCase() + nome.slice(1,nome.length)

  if(name === ganhador.nome && cpf.toString() === ganhador.cpf){
    return 'É ganhador'
  }
    return 'Não é ganhador'
}


console.log(supostoGanhador('adamastor', '123.321.789-98'))

let mganhador = {
  nome: 'aksmdk',
  nascimento: '16/09/1986',
  cpf: '123.321.789-98',
  estadoCivil: 'Casado'
}

function naoGanhadores(objeto){
  let lista = []

  if(supostoGanhador(objeto.nome,objeto.cpf) === 'Não é ganhador'){
     lista.push(objeto)
  }

  return lista.length
}







