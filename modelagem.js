// const escola = {
//     nome: ' ',
//     CNPJ: 'null',
//     Atuaçao: 'ti',
//     Cidade: 'itz',
//     Estado: 'ma',
//     Logradouro: 'rua para',
//     curso: 'cc'
// };

// const pessoa = {
//     nome: ' ',
//     nascimento: ' ',
//     CPF: 'ti',
//     Cidade: 'itz',
//     Estado: 'ma',
//     Logradouro: 'rua para',
// };

// const curso = {
//     nome: ' ',
//     duraçao_em_anos: ' ',
//     turma: ' ',
//     modulos: ' '
// };

// const endereço = {
//     Cidade: ' ',
//     Estado: ' ',
//     Logradouro: ' ',
//     Cep: ' '
// };

const carro = {
  placa: "ABC123",
  classes: ["sedan"],
  luxo: true,
  potencia: 200,
  estacionado: true,
};

function obterPlaca() {
  return carro.placa;
}
function verificarClasses() {
  if (carro.classes.length > 1) {
    return carro.classes;
  }
  return carro.classes.toString();
}

//console.log(verificarClasses())

function potenciaReal() {
  if (carro.luxo) {
    return carro.potencia ** 2;
  }
  return carro.potencia;
}

//console.log(potenciaReal())

function adicionarNovaClasse(classe) {
  let aux = carro.classes;
  if (carro.classes.length >= 3) {
    return "este carro nao pode ter mais classes";
  }

    if (
      classe == "sedan" ||
      classe == "hatchback" ||
      classe == "suv" ||
      classe == "crossover" ||
      classe == "cupê"
    ) {
     
        if (aux.includes(classe)) {
          return `o carro ja possui a classe ${classe}`;
        } 
        aux.push(classe)
        return `Classe ${classe} adicionada com sucesso`
      }
      
      return 'Classe inválida. As classes permitidas são: sedan, hatchback, suv, crossover e cupê'
} 

console.log(verificarClasses())
console.log(adicionarNovaClasse('cupê'))
console.log(verificarClasses())
console.log(adicionarNovaClasse('jjkkk'))

function naoMaisLuxo(){
    if(!carro.estacionado){
      return `O carro ${carro.placa} nao esta estacionado`
    }
     if(!carro.luxo){
      return `O carro da placa ${carro.placa} nao é luxuoso`
    }
      carro.luxo = false
      return `o carro ${carro.placa} não é mais ocnsideraado um carro de luxo`
    
}

console.log(naoMaisLuxo())


