let listaAlunos = [
    {
      nome: 'João',
      curso: 'Ciencia da Computação',
      turno: 'Noturno',
      mediaCorte: 7,
      materias: [
        {
          nome: 'Calculo I',
          avaliacoes: [6, 8, 10, 8]
        },
        {
          nome: 'Pensamento Computacional',
          avaliacoes: [6, 8, 6, 8]
        },
        {
          nome: 'Linguagem Orientada a Objetos',
          avaliacoes: [7, 8, 9, 10]
        },
        {
          nome: 'Arquitetura de Organização de Computadores',
          avaliacoes: [6, 8, 7, 8]
        }
      ]
    }
  ]

  function mat() {
    let material = listaAlunos[0].materias
    let qtd_materia = 0
   

    for(let i = 0; i < material.length; i ++){
      let nota = 0
      let media = 0
      for(let j = 0; j < material[i].avaliacoes.length;j++){
        nota += material[i].avaliacoes[j]
        media = (nota/material[i].avaliacoes.length)
      }
      if(media >= 6){
        qtd_materia++
      }
    }
   
  return qtd_materia
}
console.log(mat())

function medias() {
  let material = listaAlunos[0].materias

  let mediaFinal = 0
  let media = 0
  
  for(let i = 0; i < material.length; i ++){
    let nota = 0
    for(let j = 0; j < material[i].avaliacoes.length;j++){
      nota += material[i].avaliacoes[j]
    }
    media += (nota/material[i].avaliacoes.length)
  }
  mediaFinal = media/ material.length
  if(mediaFinal >= 7){
    return 'aluno aprovado'
  }
  return 'aluno reprovado'
}
console.log(medias())


