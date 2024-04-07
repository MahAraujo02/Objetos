const barbearia = {
    cortes: [
      { id: 1, tipo: "Militar", valor: 20.0 },
      { id: 2, tipo: "Samurai", valor: 35.0 },
      { id: 3, tipo: "Pompadour", valor: 20 },
      { id: 4, tipo: "Moicano", valor: 0 },
      { id: 5, tipo: "Razor part", valor: 0 },
    ],
  
    barbas: [
      { id: 1, tipo: "Capitão Jack", valor: 20.0 },
      { id: 2, tipo: "Van Dyke", valor: 20.0 },
      { id: 3, tipo: "Barba Média", valor: 20.0 },
      { id: 4, tipo: "Barba Baixa", valor: 20.0 },
      { id: 5, tipo: "Barba Zero", valor: 15.0 },
    ],
    estaAberto: true,
  };
  
  
  
  
  function buscaCortePorId(id) {
    for(let i = 0; i < barbearia.cortes.length; i++)
        if(barbearia.cortes[i].id === id){
            return barbearia.cortes[i]
        }
        return 'corte nao encontrado'
  }
//   console.log(buscaCortePorId(5))


  function buscaBarbaPorId(id) {
    for(let i = 0; i < barbearia.barbas.length; i++)
    if(barbearia.barbas[i].id === id){
        return barbearia.barbas[i]
    }
    return 'Barba nao encontrado'
  }
//   console.log(buscaBarbaPorId(5)):
  function verificaStatusBarbearia() {
    if(barbearia.estaAberto){
        return 'Estamos abertos '
    }
    return 'Estamos fechados'
  }

//   console.log(verificaStatusBarbearia())

  function retornaTodosCortes() {
    return barbearia.cortes
  }
//   console.log(retornaTodosCortes())

  function retornaTodasBarbas() {
    return barbearia.barbas
  }
//   console.log(retornaTodasBarbas())
  
  
  function criaPedido(nomeCliente, corteId, barbaId) {

    const encontrarCorte = buscaCortePorId(corteId)
    const encontrarBarba = buscaBarbaPorId(barbaId)

    if(encontrarCorte === 'corte nao encontrado'){
        return encontrarCorte
    }
    if(encontrarBarba === 'Barba nao encontrada'){
        return encontrarBarba
    }

    const pedido = {
        nome: nomeCliente,
        pedidoCorte:encontrarCorte.tipo,
        PedidoCortePreco:encontrarCorte.valor,
        pedidoBarba:encontrarBarba.tipo,
        pedidoBarbaPreco: encontrarBarba.valor
    }

    return pedido
  }

  const pedido = criaPedido('maria',2,3)
  function calculaTotal(pedido) {
    return `o valor total é ${pedido.PedidoCortePreco + pedido.pedidoBarbaPreco} reais`
  }
  
  // console.log(calculaTotal(pedido))
//     Atualizar serviço.
// atualizarServico(). Esta função recebe uma lista (cortes ou barbas), o id do item a ser atualizado, o novo tipo e/ou o novo valor.
// Caso o item não seja encontrado ou se pelo menos 1 dos novos valores for nulo, retorne: "Entrada de valores inválida". Valores vazios não são permitidos.

// Acesse o índice da lista e efetue a atualização. Retorne: "Item atualizado com sucesso".
function atualizaPedido(lista, id, tipo, valor) {
  for(let i = 0; i < lista.length; i++) {
    if(lista[i].id === id && tipo !== null && valor !== null) {
      lista[i].tipo = tipo;
      lista[i].valor = valor;
      return "item atuaizado com sucesso ";
    }
  }
  return 'Entrada de valores inválidos';
}

console.log(atualizaPedido(barbearia.barbas, 2,7,50));

  
 