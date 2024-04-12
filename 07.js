// 7. Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. O Algoritmo deve calcular e escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'.

const prompt = require('prompt-sync')();

const ID = Number(prompt("Qual o número da sua conta? "))
const balance = parseFloat(prompt("Qual o saldo atual da sua conta? "))
const debit = parseFloat(prompt("Qual o débito a ser realizado na conta? "))
const credit = parseFloat(prompt("Qual o limite de crédito da sua conta? "))

const currentBalance = (balance - debit) + credit

if (currentBalance > 0) {
  console.log("-=- SALDO POSITIVO -=-")
  console.log("O saldo total da sua conta atual com o débito feito anteriormente acima é de: R$ " + currentBalance)
}
else if (currentBalance < 0) {
  console.log("-=- SALDO NEGATIVO -=-")
  console.log("O saldo total da sua conta atual com o débito feito acima é de: R$ " + parseFloat(currentBalance))
}
else {
  console.log("O seu saldo está zerado: R$0,00")
}
