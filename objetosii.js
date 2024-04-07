const carros = [
    {
        modelo: "Ka",
        marca: "Ford",
        ano: "2000",
        cor: "Branco",
        completo: false,
        acessorios: ['Vidro Elétrico'],
        preco: 6799.33
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: false,
        acessorios: ['Trava'],
        preco: 12199.13
    },
    {
        modelo: "Palio",
        marca: "Fiat",
        ano: "1995",
        cor: "Verde",
        completo: false,
        acessorios: [],
        preco: 11099.1
    },
    {
        modelo: "Monza",
        marca: "Chevrolet",
        ano: "1993",
        cor: "Vinho",
        completo: false,
        acessorios: [],
        preco: 14578.25
    },
    {
        modelo: "Saveiro",
        marca: "VW",
        ano: "2013",
        cor: "Prata",
        completo: false,
        acessorios: [],
        preco: 28399.13
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 14350.45
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "2013",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 22109.21
    },
    {
        modelo: "Montana",
        marca: "Chevrolet",
        ano: "2011",
        cor: "Azul",
        completo: false,
        acessorios: [],
        preco: 15999.13
    },
    {
        modelo: "Stilo",
        marca: "Fiat",
        ano: "2000",
        cor: "Preto",
        completo: false,
        acessorios: [],
        preco: 17251.36
    }
  ]

  
  function contaTotal(lista) {
    return lista.length
  }

  //console.log(contaTotal(carros))

  function precoTotal(lista) {
    let total = 0
      for(let i = 0; i < lista.length; i++){
        total += lista[i].preco
      }
      return total.toFixed(2)
    }
  //console.log(precoTotal(carros))

  function filtraPorMarca(lista,marca) {
    let carros = []
    for(let i = 0; i < lista.length;i++){
        if(lista[i].marca.includes(marca)){
            carros.push(lista[i])
        }
    }
    return carros
  }

  //console.log(filtraPorMarca(carros,'VW'))

  function filtraPorAcessorio(lista,acessorio) {
    let acessorioss = []
    for(let i = 0; i < lista.length;i++){
        if(lista[i].acessorios.includes(acessorio)){
            acessorioss.push(lista[i])
        }
    }
    return acessorioss
  }

  //console.log(filtraPorAcessorio(carros,'Alarme'))
  
  function eCarroCompleto(lista) {
    let carros = []
    for(let i = 0; i < lista.length;i++){
        if(lista[i].completo){
            carros.push(lista[i])
        }
    }
    return carros
  }

//   console.log(eCarroCompleto(carros))

  function adicionaCarro(lista,modelo,marca,ano,cor,completo,acessorio,preco) {
        const adc = {
            modelo : modelo,
            marca: marca,
            ano: ano,
            cor: cor,
            completo: completo,
            acessorios: acessorio,
            preco: preco
        }

        lista.push(adc)
        console.log("acervo atualizado")
        console.log(lista)
  }
// console.log(adicionaCarro(carros,'civic','honda',2023,'branco',true,['acessorio','jsiwjw'],635627))

function removeCarro(lista, indice) {
    if(!lista[indice]){
        return 'indice invalido'
    }
    lista.splice(indice,1)
    console.log('item removido com sucesso')
    return lista
  }

//   console.log(removeCarro(carros,8))
 
function contaCarrosNovos(lista) {
  let novos = []
  for(let i = 0; i < lista.length;i++){
    let conta = 2023 - lista[i].ano
    if( conta <= 10 ){
       novos.push(lista[i])
    }
  }
  return novos
}

//console.log(contaCarrosNovos(carros))

function adicionarDono(lista,indice,pessoa){
   for(let i = 0; i < lista.length;i++){
      lista[i].dono = {}
   }
   lista[indice].dono = pessoa
   return lista
}

console.log(adicionarDono(carros,8,{nome:'fulano', telefone:39329032}))