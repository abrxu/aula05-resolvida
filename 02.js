// 2. Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.

const prompt = require('prompt-sync')();

const valor1 = Number(prompt("#1: Digite um valor "))
const valor2 = Number(prompt("#2: Digite um valor "))
const valor3 = Number(prompt("#3: Digite um valor "))


if (valor1 > valor2 && valor1 > valor3) {
  console.log("O valor " + valor1 + " é o maior valor")
}
else if (valor2 > valor1 && valor2 > valor3) {
  console.log("O valor " + valor2 + " é o maior valor")
}
else {
  console.log("O valor " + valor3 + " é o maior valor")
}