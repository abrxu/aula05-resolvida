// 1. Ler um valor e escrever se é positivo, negativo ou zero. 

const prompt = require( 'prompt-sync' )();

const valor = prompt("Digite um valor ")

if (valor > 0) { 
  console.log("O valor é positivo")
}
else if (valor < 0) {
  console.log("O valor é negativo")
}
else if (valor == 0) {
  console.log("O valor é zero")
}