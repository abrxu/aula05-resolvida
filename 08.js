// 8. Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total a pagar (total a pagar = total - desconto), sabendo-se que: 
// - Se quantidade <= 5 o desconto será de 2% 
// - Se quantidade > 5 e quantidade <=10 o desconto será de 3% 
// - Se quantidade > 10 o desconto será de 5%

const prompt = require('prompt-sync')();

const productName = String(prompt("Qual o nome do produto? "))
let productQuantity = parseInt(prompt("Qual a quantidade de produtos adquiridos? "))
const productUnitValue = parseFloat(prompt("Qual o valor unitário do produto? (Utilize PONTO ao invés de VÍRGULA para o valor): "))

let subTotal = productQuantity * productUnitValue

if (productQuantity <= 5) {
  subTotal = subTotal * 0.98
}
else if (productQuantity > 5 && productQuantity <= 10) {
  subTotal = subTotal * 0.97
}
else {
  subTotal = subTotal * 0.95
}

console.log("Total a ser pago: R$ " + subTotal.toFixed(2))
console.log("Parabéns pela compra de " + productQuantity + " unidade(s) de " + productName + "!")