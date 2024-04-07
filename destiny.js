const onibus = {
    capacidade: 40,
    origem: 'Curitiba-PR',
    destino: 'Rio de Janeiro-RJ',
    paradas: [
      'São Paulo-SP',
      'Campinas-SP',
      'São José dos Campos-SP',
      'Volta Redonda-RJ'
    ],
    passageiros: [
      {
        nome: 'Luis da Silva',
        rg: '1234567890',
        bilhete: {
          origem: 'Curitiba-PR',
          destino: 'São José dos Campos-SP',
          poltrona: 15,
        }
      },
      {
        nome: 'João da Silva',
        rg: '1234567891',
        bilhete: {
          origem: 'São Paulo-SP',
          destino: 'Rio de Janeiro-RJ',
          poltrona: 16,
        }
      }
    ],
    passageiro: function(paradaAtual){
      let arr = []
   
      for(let i = 0 ; i < this.passageiros.length; i++){
       if(this.passageiros[i].bilhete.destino.includes(paradaAtual)){
         arr.push(this.passageiros[i])
       }}
   
       return arr
      
    }
  }

//   Sua tarefa é determinar quais passageiros irão descer do ônibus em determinada parada.

// Desenvolva um método que recebe a parada atual como parâmetro e verifica se é igual ao valor de paradas do objeto onibus. Esse método deverá verificar em quais passageiros o destino é igual à parada atual do ônibus.

// Em seguida, deve retornar um array com todos os passageiros que irão descer na parada atual.

// primeiro verifico se a para que recebi esta contida na lista de paradas do onibus
//verifico se no meu objeto onibus, dentro cda propriedade passageiros,percorro os objetos e procuro a propriedade bilhete e dentro da propriedade bilhete procuro o destino
// verifico se o destino se a parada atual é igual ao destino do passageiro
console.log(onibus.passageiro('São José dos Campos-SP'))