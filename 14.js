// 14. Faça um algoritmo para ler as 3 notas obtidas por um aluno nas 3 verificações e a média dos exercícios que fazem parte da avaliação. Calcular a média de aproveitamento, usando a fórmula abaixo e escrever o conceito do aluno de acordo com a tabela de conceitos mais abaixo:

// Média de aproveitamento = (N1 + N2 * 2 + N3 * 3 + Média dos Exercícios) / 7
// Notas conforme tabela do documento:
// >= 9.0 = CONCEITO A | >= 7.5 E < 9.0 = CONCEITO B | >= 6.0 E < 7.5 = CONCEITO C | < 6.0 = CONCEITO D

const prompt = require('prompt-sync')();

let A1 = parseFloat(prompt("1. Digite a nota do aluno na Avaliação A1: "))
let A2 = parseFloat(prompt("2. Digite a nota do aluno na Avaliação A2: "))
let A3 = parseFloat(prompt("3. Digite a nota do aluno na Avaliação A3: "))

let mediaDosExercicios = (A1 + A2 + A3) / 3.0

let mediaDeAproveitamento = (A1 + A2 * 2 + A3 * 3 + mediaDosExercicios) / 7

if (mediaDeAproveitamento >= 9.0) {
  console.log("NOTA TOTAL: " + mediaDeAproveitamento.toFixed(2))
  console.log("CONCEITO A")
}
else if (mediaDeAproveitamento >= 7.5) {
  console.log("NOTA TOTAL: " + mediaDeAproveitamento.toFixed(2))
  console.log("CONCEITO B")
}
else if (mediaDeAproveitamento >= 6.0) {
  console.log("NOTA TOTAL: " + mediaDeAproveitamento.toFixed(2))
  console.log("CONCEITO C")
}
else {
  console.log("NOTA TOTAL: " + mediaDeAproveitamento.toFixed(2))
  console.log("CONCEITO D")
}