// Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.

const prompt = require('prompt-sync')();

let valor1 = Number(prompt("#1: Digite um valor "))
let valor2 = Number(prompt("#2: Digite um valor "))
let valor3 = Number(prompt("#3: Digite um valor "))

let maior1 = 0
let maior2 = 0

if (valor1 > valor2 && valor1 > valor3) {
  maior1 = valor1
  maior2 = Math.max(valor2, valor3)
}
else if (valor2 > valor1 && valor2 > valor3) {
  maior1 = valor2
  maior2 = Math.max(valor1, valor3)
}
else {
  maior1 = valor3
  maior2 = Math.max(valor1, valor2)
}

let sum = maior1 + maior2

console.log("A soma dos dois maiores é: " + sum)