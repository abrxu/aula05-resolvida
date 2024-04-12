// 12. Uma fruteira está vendendo frutas com a seguinte tabela de preços:
// Morango: ATÉ 5KG: R$2,50/kg | ACIMA DE 5KG: R$2,20/kg
// Maçã: ATÉ 5KG: R$1,80/kg | ACIMA DE 5KG: R$1,50/kg
// Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.

const prompt = require('prompt-sync')();

const strawberryAmount = parseFloat(prompt("Quantos KG de morango você irá comprar? "))
const appleAmount = parseFloat(prompt("Quantos KG de maçã você irá comprar? "))

let strawberryTotal = 0.0;
let appleTotal = 0.0

if (strawberryAmount <= 5.0) {
  strawberryTotal = strawberryAmount * 2.50
}
else {
  strawberryTotal = strawberryAmount * 2.20
}

if (appleAmount <= 5.0) {
  appleTotal = appleAmount * 1.80
}
else {
  appleTotal = appleAmount * 1.50
}

let subTotal = strawberryTotal + appleTotal

let totalAmount = strawberryAmount + appleAmount

if (totalAmount > 8 || subTotal > 25.00) {
  subTotal *= 0.90
}

console.log("VALOR A SER PAGO: R$ " + subTotal.toFixed(2))