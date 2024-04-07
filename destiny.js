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


console.log(onibus.passageiro('São José dos Campos-SP'))