// 11. Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais novo com a mulher mais velha. 

const prompt = require('prompt-sync')();

let manAge1 = Number(prompt("Digite a idade do homem #1: "))
let manAge2 = Number(prompt("Digite a idade do homem #2: "))
let womanAge1 = Number(prompt("Digite a idade da mulher #1: "))
let womanAge2 = Number(prompt("Digite a idade da mulher #2: "))

const olderMan = Math.max(manAge1, manAge2)
const youngerWoman = Math.min(womanAge1, womanAge2)

const youngerMan = Math.min(manAge1, manAge2)
const olderWoman = Math.max(womanAge1, womanAge2)

const sum = olderMan + youngerWoman
const product = youngerMan * olderWoman

console.log("A soma da idade do homem mais velho + idade da mulher mais nova é: " + sum)
console.log("O produto da multiplicação entre o homem mais novo * a mulher mais velha é: " + product)

