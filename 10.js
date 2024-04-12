// 10. Ler dois valores e imprimir uma das três mensagens a seguir: ‘Números iguais’, caso os números sejam iguais ‘Primeiro é maior’, caso o primeiro seja maior que o segundo; ‘Segundo maior’, caso o segundo seja maior que o primeiro.

const prompt = require('prompt-sync')();

const valor1 = Number(prompt("#1 Digite um valor: "))
const valor2 = Number(prompt("#2 Digite outro valor: "))

if (valor1 == valor2 ) {
  console.log("Números iguais")
}
else if (valor1 > valor2) {
  console.log("O primeiro valor é o maior")
}
else if (valor2 > valor1) {
  console.log("O segundo valor é o maior")
}